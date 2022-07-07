import "./EventPage.css";

import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyButton from "../../SharedComponents/MyButton/MyButton";
import Popup from "./components/Popup/Popup";
import { Carousel } from 'react-responsive-carousel';
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

const items = [{
	"id": "6cedf051-1fcc-4875-a3a3-1582061c336a",
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

const EventPage = () => {	
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
			longtitude: ""
		},
		id: "",
		title: "",
		description: "",
		price: "",
		ammount: "",
		images: [],
		eventDate: [],
		// companyId: "696a4a30-892b-47e8-9c0c-34252dc9b6f7",
		companyName: ""
	});
	const [dates, setDates] = useState([]);

	const [startDate, setStartDate] = useState();
	const [dateFin, setDateFin] = useState();

	const dispatch = useDispatch();


	useEffect(() => {
		if (status === QueryStatus.uninitialized) {
			getEvent(params.id);
		}else if (status === QueryStatus.fulfilled) {
			// console.log(data);
			setCurrItem(data);
			var tempDates = [];
			// data.eventDate.map((item)=>{
			// 	tempDates.push(new Date(item.slice(0, -1)));
			// })

			console.log("2022-07-10T20:59:59.000Z")
			tempDates.push(new Date("2022-07-10T20:59:59.000Z"));
			// console.log(tempDates[0].toISOString());
			tempDates.push(new Date());
			tempDates[1].setDate(tempDates[0].getDate()+7);
			tempDates.push(new Date());
			tempDates[2].setDate(tempDates[1].getDate()+7);
			tempDates.push(new Date());
			tempDates[3].setDate(tempDates[2].getDate()+7);
			setDates(tempDates);
			setStartDate(new Date(tempDates[0]));
			// console.log(data.eventDate, tempDates)
		}else if (isError) {
			// console.log(error.data);
			let errToastMessage = "";
			if (error.status === 400) {
			  errToastMessage = `ERROR: 400 BAD REQUEST`;
			} else if (error.status === 500) {
			  errToastMessage = `ERROR: 500 INTERNAL SERVER ERROR`;
			}else if(error.status === 404){
				errToastMessage = `ERROR: 404 no route found`;
			}
			if(errToastMessage)console.log(errToastMessage);
			navigate('/')
		  }
	  }, [params, status, isError, error]);

	useEffect(() => {
		console.log(startDate)
	}, [startDate]);


	const [isOpen, setIsOpen] = useState(false);
	const togglePopup = () => {
		console.log({ eventID: currItem.id, eventPrice: currItem.price, eventLocation: currItem.location, eventDate: dateFin})
		dispatch(setEvent((state)=> { 
			state.eventID= currItem.id;
			state.eventPrice= currItem.price;
			state.eventLocation= currItem.location.address;
			state.eventDate= dateFin;
		}));
		setIsOpen(!isOpen);
		if(isOpen){
			document.body.style.overflow = 'unset';
		}else{
			document.body.style.overflow = 'hidden';
		}
	}

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
						{
							currItem.images.map((item, index)=>
							<div key={uuidv4()}>
									<img src={item} />
								</div>
							)
						}
					</Carousel>
				</div>
				<div className="EventPage-top-right">
					<div className="EventPage-top-right-txt">
						<span className="EventPage-title">{currItem.title}</span>
						<span className="EventPage-location">
							<span className="material-icons-outlined">
								location_on
							</span>
							{currItem.location.address}
						</span>
					</div>
					<div className="EventPage-top-right-other">
						<DatePicker
						// selected={startDate}
						onChange={(date) => {
							let temp = date.toISOString();
						}}
						minDate={dates[0]}
						monthsShown={2}
						includeDates={dates}
						// includeDateIntervals={[{start: new Date(dates[0].getDate()-1), end: dates[0]}]}
						highlightDates={dates}
						inline
						// disabledKeyboardNavigation
						/>
						{/* <span className="EventPage-top-right-time">Ώρα: {startDate.getHours()}:{startDate.getMinutes()}</span> */}
						<span className="EventPage-top-right-time">Ώρα: TODO</span>
						<div className="EventPage-top-right-btns">
							<span className="EventPage-top-right-btns-price">από <span className="EventPage-top-right-btns-price-num">{currItem.price}€</span></span>
							<MyButton labelTxt={"Κράτηση"} bgColor={"#a8ffaa"} clicked={togglePopup}/>
						</div>
					</div>

				</div>
			</div>
			<div className="EventPage-top-mobile">
				<div className="EventPage-top-mobile-title">
					<span className="EventPage-title">{currItem.title}</span>
					<span className="EventPage-location">
						<span className="material-icons-outlined">
							location_on
						</span>
						{currItem.location.address}
					</span>
				</div>
				<div className="EventPage-top-mobile-left">
					<Carousel>
						{
							currItem.images.map((item, index)=>
								<div key={uuidv4()}>
									<img src={item} />
								</div>
							)
						}
					</Carousel>
				</div>
				<div className="EventPage-top-mobile-right">
					{/* {dates.length > 0 &&  */}
						<div className="EventPage-top-mobile-datepicker">
							{/* TODO */}
							{/* <DatePicker
								minDate={dates[0]}
								monthsShown={1}
								includeDateIntervals={[{start: new Date(dates[0].getDate()-1), end: dates[dates.length-1]}]}
								highlightDates={dates}
								inline
							/> */}
						</div>
					{/* } */}
					<div className="EventPage-top-mobile-right-btns">
						<span className="EventPage-top-mobile-right-btns-price">από <span className="EventPage-top-mobile-right-btns-price-num">{currItem.price}€</span></span>
						<MyButton labelTxt={"Κράτηση"} bgColor={"#a8ffaa"} clicked={togglePopup}/>
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
					{/* <EventMap lat={parseInt(currItem.location.latitude)} lng={parseInt(currItem.location.longtitude)} /> */}
				</div>
			</div>
			{isOpen && <Popup
			handleClose={togglePopup}
			/>}
		</div>	
	);
};

export default EventPage;