import "./EventPage.css";

import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyButton from "../../SharedComponents/MyButton/MyButton";
import Popup from "./components/Popup/Popup";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
// import "../../../images/"
import { v4 as uuidv4 } from "uuid";

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {} from "@googlemaps/js-api-loader";


const items = [{
	"id": 1,
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


  function Map({ center, zoom }) {
	const ref = useRef();
	const [map, setMap] = useState();
  
	useEffect(() => {
	  if (ref.current && !map) {
		setMap(
		  new window.google.maps.Map(ref.current, {
			center,
			zoom,
		  })
		);
	  }
	});
  
	return (
	  <div
		style={{ width: "100%", height: "250px" }}
		ref={ref}
		id="map"
		className=""
	  />
	);
  }

  const render = (status) => {
	if (status === Status.LOADING) return <h3>{status} ..</h3>;
	if (status === Status.FAILURE) return <h3>{status} ...</h3>;
	return null;
  };
  
  const Marker = (options) => {
	const [marker, setMarker] = useState();
  
	useEffect(() => {
	  if (!marker) {
		setMarker(new window.google.maps.Marker());
	  }
  
	  // remove marker from map on unmount
	  return () => {
		if (marker) {
		  marker.setMap(null);
		}
	  };
	}, [marker]);
	useEffect(() => {
	  if (marker) {
		marker.setOptions(options);
	  }
	}, [marker, options]);
	return null;
  };

const EventPage = () => {	
	const params = useParams();
	const currItem = items.find(item => item.id == params.id);
	const [startDate, setStartDate] = useState(new Date());
	const [isOpen, setIsOpen] = useState(false);
	const togglePopup = () => {
		setIsOpen(!isOpen);
		if(isOpen){
			document.body.style.overflow = 'unset';
		}else{
			document.body.style.overflow = 'hidden';
		}
	}

	const zoom = 13;
	let center = { lat: 37.990832, lng: 23.70332 };
  let position = { lat: -25.363882, lng: 131.044922 };

	return (
		<div className="EventPage-external">
			<div className="EventPage-top">
				<div className="EventPage-top-left">
					<Carousel width="600px">
						{
							currItem.images.slice(0,currItem.images.length).map((item, index)=>
								<div key={uuidv4()}>
									<img src={item.url} />
									{/* <p className="legend">Legend 1</p> */}
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
							Δημοτικό Θέατρο
						</span>
					</div>
					<div className="EventPage-top-right-other">
						<DatePicker
						// selected={new Date(currItem.eventDate)}
						minDate={new Date(currItem.eventDate)}
						// maxDate={new Date(currItem.eventDate)}
						// onChange={(date) => setStartDate(date)}
						monthsShown={2}
						includeDateIntervals={[{start: new Date(currItem.eventDate), end: new Date(currItem.eventDate)}]}
						highlightDates={[new Date(currItem.eventDate)]}
						inline
						// disabled
						/>
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
						Δημοτικό Θέατρο
					</span>
				</div>
				<div className="EventPage-top-mobile-left">
					<Carousel>
						{
							currItem.images.slice(0,currItem.images.length).map((item, index)=>
								<div key={uuidv4()}>
									<img src={item.url} />
									{/* <p className="legend">Legend 1</p> */}
								</div>
							)
						}
					</Carousel>
				</div>
				<div className="EventPage-top-mobile-right">
					<div className="EventPage-top-mobile-datepicker">
						<DatePicker
							// selected={new Date(currItem.eventDate)}
							minDate={new Date(currItem.eventDate)}
							// maxDate={new Date(currItem.eventDate)}
							// onChange={(date) => setStartDate(date)}
							monthsShown={1}
							includeDateIntervals={[{start: new Date(currItem.eventDate), end: new Date(currItem.eventDate)}]}
							highlightDates={[new Date(currItem.eventDate)]}
							inline
							// disabled
						/>
					</div>
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
					<Wrapper
						apiKey={"AIzaSyBT2if7zGVEamPsOO5I02MFM3COSVegWCY"}
						render={render}
					>
						<Map center={center} zoom={zoom}>
							<Marker position={position} />
						</Map>
                  	</Wrapper>
				</div>
			</div>
			{isOpen && <Popup
			handleClose={togglePopup}
			/>}
		</div>	
	);
};

export default EventPage;