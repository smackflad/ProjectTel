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

const items = [{
  "id": "ced2dcf9-0e11-4630-9940-a6d78dbe9338",
  "title": "Nothing to Lose",
  "description": "blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue",
  "eventDate": "6/7/2022",
  "price": 14,
  "ammount": null,
  "companyId": null,
  "companyName": "Shuffletag",
  "images": [
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" }
  ],
  "location": null
}, {
  "id": 2,
  "title": "Sherlock Holmes: The Woman in Green",
  "description": "dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus",
  "eventDate": "6/11/2022",
  "price": 15,
  "ammount": null,
  "companyId": null,
  "companyName": "Devcast",
  "images": [
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" }
  ],
  "location": null
}, {
  "id": 3,
  "title": "Strada, La",
  "description": "rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis",
  "eventDate": "6/6/2022",
  "price": 14,
  "ammount": null,
  "companyId": null,
  "companyName": "Brainverse",
  "images": [
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" }
  ],
  "location": null
}, {
  "id": 4,
  "title": "When Love Is Not Enough: The Lois Wilson Story",
  "description": "at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis",
  "eventDate": "6/8/2022",
  "price": 14,
  "ammount": null,
  "companyId": null,
  "companyName": "Oozz",
  "images": [
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" }
  ],
  "location": null
}, {
  "id": 5,
  "title": "War Within, The",
  "description": "imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit",
  "eventDate": "6/8/2022",
  "price": 11,
  "ammount": null,
  "companyId": null,
  "companyName": "Demivee",
  "images": [
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" }
  ],
  "location": null
}, {
  "id": 6,
  "title": "Green Years, The",
  "description": "integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec",
  "eventDate": "6/9/2022",
  "price": 14,
  "ammount": null,
  "companyId": null,
  "companyName": "Mycat",
  "images": [
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" }
  ],
  "location": null
}, {
  "id": 7,
  "title": "In Cold Blood",
  "description": "mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus",
  "eventDate": "6/9/2022",
  "price": 14,
  "ammount": null,
  "companyId": null,
  "companyName": "Jaloo",
  "images": [
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" }
  ],
  "location": null
}, {
  "id": 8,
  "title": "Group, The",
  "description": "nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin",
  "eventDate": "6/6/2022",
  "price": 15,
  "ammount": null,
  "companyId": null,
  "companyName": "Eayo",
  "images": [
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" }
  ],
  "location": null
}, {
  "id": 9,
  "title": "Everybody's Fine (Stanno tutti bene)",
  "description": "rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum",
  "eventDate": "6/7/2022",
  "price": 13,
  "ammount": null,
  "companyId": null,
  "companyName": "Twimm",
  "images": [
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" }
  ],
  "location": null
}, {
  "id": 10,
  "title": "As Above, So Below",
  "description": "vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam",
  "eventDate": "6/10/2022",
  "price": 14,
  "ammount": null,
  "companyId": null,
  "companyName": "Ntag",
  "images": [
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" }
  ],
  "location": null
}, {
  "id": 11,
  "title": "Omen IV: The Awakening",
  "description": "nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede",
  "eventDate": "6/8/2022",
  "price": 14,
  "ammount": null,
  "companyId": null,
  "companyName": "Twiyo",
  "images": [
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" }
  ],
  "location": null
}, {
  "id": 12,
  "title": "Names of Love, The (Le nom des gens)",
  "description": "nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce",
  "eventDate": "6/7/2022",
  "price": 10,
  "ammount": null,
  "companyId": null,
  "companyName": "Voomm",
  "images": [
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" }
  ],
  "location": null
}, {
  "id": 13,
  "title": "Rest Stop",
  "description": "lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper",
  "eventDate": "6/11/2022",
  "price": 15,
  "ammount": null,
  "companyId": null,
  "companyName": "Thoughtworks",
  "images": [
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" }
  ],
  "location": null
}, {
  "id": 14,
  "title": "Catastroika",
  "description": "pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est",
  "eventDate": "6/7/2022",
  "price": 13,
  "ammount": null,
  "companyId": null,
  "companyName": "Skinte",
  "images": [
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" }
  ],
  "location": null
}, {
  "id": 15,
  "title": "Baxter, The",
  "description": "rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",
  "venue": "",
  "eventDate": "6/9/2022",
  "price": 15,
  "ammount": null,
  "companyId": null,
  "companyName": "Skibox",
  "images": [
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" },
    { url: "https://2.img-dpreview.com/files/p/E~TS590x0~articles/5081755051/0652566517.jpeg" }
  ],
  "location": null
}];
const EventsList = ({ events }) => {
  return (
    <>
      {events.map((ev) => {
        return <Event id={ev.id} title={ev.title} venue={"ev.location.city"} img={ev.images[0].url} date={ev.eventDate} key={uuidv4()} />;
      })}
    </>
  );
};
const Middle_Component = () => {
  const state = useSelector((state) => state.search);
  

  const [getSearch, { data, status, isLoading, isError, error }] =
  useGetSearchMutation();

  useEffect(() => {
    if (status === QueryStatus.fulfilled) {
      console.log(data)//TODO ALEX make it work with pagenate, everything is in data and everything works
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
    if(state.title === ""){
      delete state.title;
      delete state.description;
    }
    getSearch({...state})
    console.log(state)
  }, [state])
  
  
  const [currentItems, setCurrentItems] = useState([{ id:"",title: "", venue: "", images:[{url:""}],eventDate:"", }]);
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
