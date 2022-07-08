import "./EventPage.css";

import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyButton from "../../SharedComponents/MyButton/MyButton";
import Popup from "./components/Popup/Popup";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
// import "../../../images/"
import { v4 as uuidv4 } from "uuid";
import EventMap from "./components/maps/EventMap";
import { useGetEventMutation } from "../../../store/api/eventApi";
import { QueryStatus } from "@reduxjs/toolkit/query/react";
import CircleLoader from "react-spinners/CircleLoader";
import { setEvent } from "../../../store/eventSlice";
import { useDispatch, useSelector } from "react-redux";

const EventPage = () => {
  const userState = useSelector((state) => state.persistedReducer.global);
  const [time, setTime] = useState("")
  const params = useParams();
  let navigate = useNavigate();
  const [getEvent, { data, isError, isLoading, error, status }] =
    useGetEventMutation();
  const [currItem, setCurrItem] = useState({
    location: {
      address: "",
      addressNum: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      latitude: "",
      longtitude: "",
    },
    id: "",
    title: "",
    description: "",
    price: "",
    ammount: "",
    images: [],
    eventDate: [],
    // companyId: "696a4a30-892b-47e8-9c0c-34252dc9b6f7",
    companyName: "",
  });
  const [dates, setDates] = useState([]);

  const [startDate, setStartDate] = useState();
  const [dateFin, setDateFin] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === QueryStatus.uninitialized) {
      getEvent(params.id);
    } else if (status === QueryStatus.fulfilled) {
      console.log(data);
      setCurrItem(data);
      var tempDates = [];
      // data.eventDate.map((item)=>{
      // 	tempDates.push(new Date(item.slice(0, -1)));
      // })
      data.multipleEventDates.map((item)=>{
        var dt = new Date(item);
        dt.setHours(dt.getHours()+3);
        tempDates.push(dt);
      })
      setDates(tempDates);
      let tempFF= new Date(tempDates[0])
      tempFF.setHours(tempFF.getHours()+3);
      var fin = tempFF.toISOString().slice(tempFF.toISOString().indexOf("T")+1);
      setStartDate(tempFF);
      setTime(fin)
      // console.log(data.eventDate, tempDates)
    } else if (isError) {
      // console.log(error.data);
      let errToastMessage = "";
      if (error.status === 400) {
        errToastMessage = `ERROR: 400 BAD REQUEST`;
      } else if (error.status === 500) {
        errToastMessage = `ERROR: 500 INTERNAL SERVER ERROR`;
      } else if (error.status === 404) {
        errToastMessage = `ERROR: 404 no route found`;
      }
      if (errToastMessage) console.log(errToastMessage);
      navigate("/");
    }
  }, [params, status, isError, error]);

  // useEffect(() => {
  //   console.log(startDate);
  // }, [startDate]);

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    console.log({
      eventID: currItem.id,
      eventPrice: currItem.price,
      eventLocation: currItem.location,
      eventDate: startDate,
    });
    dispatch(
      setEvent((state) => {
        state.eventID = currItem.id;
        state.eventPrice = currItem.price;
        state.eventLocation = currItem.location.address;
        state.eventDate = (startDate.toISOString().slice(0, startDate.toISOString().indexOf("T")))+", "+startDate.toISOString().slice(startDate.toISOString().indexOf("T")+1, startDate.toISOString().length-8);
      })
    );
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  if (
    isLoading ||
    !dates.length
    // || status === QueryStatus.fulfilled
  ) {
    return (
      <div className="Account-external">
        <CircleLoader />
      </div>
    );
  }

  return (
    <div className="EventPage-external">
      <div className="EventPage-top">
        <div className="EventPage-top-left">
          <Carousel width="600px">
            {currItem.images.map((item, index) => (
              <div key={uuidv4()}>
                <img src={item} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="EventPage-top-right">
          <div className="EventPage-top-right-txt">
            <span className="EventPage-title">{currItem.title}</span>
            <span className="EventPage-location">
              <span className="material-icons-outlined">location_on</span>
              {currItem.location.address}
            </span>
          </div>
          <div className="EventPage-top-right-other">
            <DatePicker
              onChange={(date) => {
                let temp = date.toISOString();
                let dt = new Date(temp);
                dt.setHours(dt.getHours()+3);
                var fin = ""
                dates.map((item)=>{
                  if(item.toISOString().startsWith(dt.toISOString().slice(0, dt.toISOString().indexOf("T")))){
                    let dtt = new Date(item);
                    dtt.setHours(dtt.getHours()+3);
                    fin = dtt.toISOString().slice(dtt.toISOString().indexOf("T")+1);
                  }
                })
                console.log(fin)
                setTime(fin);

              }}
              minDate={dates[0]}
              monthsShown={2}
              includeDates={dates}
              highlightDates={dates}
              inline
            />
            <span className="EventPage-top-right-time">Ώρα: {startDate.toISOString().slice(startDate.toISOString().indexOf("T")+1, startDate.toISOString().length-8)}</span>
            {!userState.isLoggedIn && (
              <span className="EventPage-top-right-time">
                Πρεπεί να κανετε συνδεσή για να κάνετε κράτηση
              </span>
            )}
            <div className="EventPage-top-right-btns">
              <span className="EventPage-top-right-btns-price">
                από{" "}
                <span className="EventPage-top-right-btns-price-num">
                  {currItem.price}
                  <span className="my-coin-icon"></span>
                </span>
              </span>
              <MyButton
                labelTxt={"Κράτηση"}
                bgColor={"#a8ffaa"}
                clicked={togglePopup}
                disabled={!userState.isLoggedIn}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="EventPage-top-mobile">
        <div className="EventPage-top-mobile-title">
          <span className="EventPage-title">{currItem.title}</span>
          <span className="EventPage-location">
            <span className="material-icons-outlined">location_on</span>
            {currItem.location.address}
          </span>
        </div>
        <div className="EventPage-top-mobile-left">
          <Carousel>
            {currItem.images.map((item, index) => (
              <div key={uuidv4()}>
                <img src={item} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="EventPage-top-mobile-right">
          <div className="EventPage-top-mobile-datepicker">
          <DatePicker
              onChange={(date) => {
                let temp = date.toISOString();
                let dt = new Date(temp);
                dt.setHours(dt.getHours()+3);
                var fin = ""
                dates.map((item)=>{
                  if(item.toISOString().startsWith(dt.toISOString().slice(0, dt.toISOString().indexOf("T")))){
                    let dtt = new Date(item);
                    dtt.setHours(dtt.getHours()+3);
                    fin = dtt.toISOString().slice(dtt.toISOString().indexOf("T")+1);
                  }
                })
                console.log(fin)
                setTime(fin);

              }}
              minDate={dates[0]}
              monthsShown={1}
              includeDates={dates}
              highlightDates={dates}
              inline
            />
          </div>
            <span className="EventPage-top-right-time">Ώρα: {startDate.toISOString().slice(startDate.toISOString().indexOf("T")+1, startDate.toISOString().length-8)}</span>
            {!userState.isLoggedIn && (
              <span className="EventPage-top-right-time">
                Πρεπεί να κανετε συνδεσή για να κάνετε κράτηση
              </span>
            )}
          <div className="EventPage-top-mobile-right-btns">
            <span className="EventPage-top-mobile-right-btns-price">
              από{" "}
              <span className="EventPage-top-mobile-right-btns-price-num">
                {currItem.price}
                <span className="my-coin-icon"></span>
              </span>
            </span>
            <MyButton
              labelTxt={"Κράτηση"}
              bgColor={"#a8ffaa"}
              clicked={togglePopup}
              disabled={!userState.isLoggedIn}

            />
          </div>
        </div>
      </div>
      <div className="EventPage-bot">
        <div className="EventPage-bot-desc">
          <span className="EventPage-bot-title">Περιγραφή</span>
          <span className="EventPage-bot-txt">{currItem.description}</span>
        </div>
        <div className="EventPage-bot-map">
          <span className="EventPage-bot-title">Χάρτης</span>
          <EventMap lat={37.772} lng={-122.214} />
        </div>
      </div>
      {isOpen && <Popup handleClose={togglePopup} />}
    </div>
  );
};

export default EventPage;
