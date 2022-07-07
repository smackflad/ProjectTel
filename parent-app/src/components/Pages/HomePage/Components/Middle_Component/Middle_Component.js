import "./Middle_Component.css";
import Event from "../Event/Event";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { useGetSearchMutation } from "../../../../../store/api/searchApi";
import { QueryStatus } from "@reduxjs/toolkit/query/react";

// import Inside_Middle_Component from '../Inside_Middle_Component/Inside_Middle_Component';
import SearchFilters from "./SearchFilters/SearchFilters";

const EventsList = ({ events }) => {
  return (
    <>
      {events.map((ev) => {
        if (ev.location)
          return (
            <Event
              id={ev.id}
              title={ev.title}
              venue={ev.location.city}
              img={ev.images[0]}
              date={ev.eventDate}
              key={uuidv4()}
            />
          );
      })}
    </>
  );
};
const Middle_Component = () => {
  const state = useSelector((state) => state.search);
  const [response, setResponse] = useState([]);
  const [getSearch, { data, status, isLoading, isError, error }] =
    useGetSearchMutation();

  const [itemsSum, setItemsSum] = useState(0);
  // const [items, setItems] = useState([]);

  useEffect(() => {
    if (status === QueryStatus.fulfilled) {
      setResponse(data);
      setItemsSum(data.total);
      const items = data.items;
      console.log(items);
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    } else if (isError) {
      console.log(error.data);
      let errToastMessage = "";
      if (error.status === 400) {
        errToastMessage = `ERROR: 400 BAD REQUEST`;
      } else if (error.status === 500) {
        errToastMessage = `ERROR: 500 INTERNAL SERVER ERROR`;
      }
      console.log(errToastMessage);
    }
  }, [data, isLoading, isError, status, error]);

  useEffect(() => {
    if (state.title === "") {
      delete state.title;
      delete state.description;
    }
    getSearch({ ...state });
    console.log(state);
  }, [state]);

  const [currentItems, setCurrentItems] = useState([
    { id: "", title: "", venue: "", images: [{ url: "" }], eventDate: "" },
  ]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    if (response.items)
      setCurrentItems(response.items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(itemsSum / itemsPerPage));
  }, [response, itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % itemsSum;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div className="Middle_Component-external">
      <SearchFilters />
      <div className="Middle_Component-outsideContainer">
        <EventsList events={currentItems} />
      </div>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="simple-pagination"
        pageClassName="pagination-page-num"
        breakClassName="pagination-elipsis"
        activeClassName="pagination-selected"
        previousClassName="pagination-prev"
        nextClassName="pagination-next"
      />
    </div>
  );
};

export default Middle_Component;
