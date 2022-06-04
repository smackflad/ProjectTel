import "./Middle_Component.css";
import Event from "../Event/Event";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { v4 as uuidv4 } from "uuid";

// import Inside_Middle_Component from '../Inside_Middle_Component/Inside_Middle_Component';
import SearchFilters from "./SearchFilters/SearchFilters";

const items = [
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "test", venue: "test" },
  { title: "KARGA", venue: "KARGA" },
];
const EventsList = ({ events }) => {
  return (
    <>
      {events.map((ev) => {
        return <Event title={ev.title} venue={ev.venue} key={uuidv4()} />;
      })}
    </>
  );
};
const Middle_Component = () => {
  const [currentItems, setCurrentItems] = useState([{ title: "", venue: "" }]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
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
