import "./OverviewPage.css";
import { useEffect, useRef, useState } from "react";
import MySelectBox from "../../generalComponents/MySelectBox/MySelectBox";
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryScatter,
  VictoryGroup,
  VictoryTooltip,
} from "victory";
import { v4 as uuidv4 } from "uuid";
import SearchFilters from "./SearchFilters/SearchFilters";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetStatisticsMutation } from "../../../store/api/providerApi";
import { QueryStatus } from "@reduxjs/toolkit/query/react";

import useSize from "@react-hook/size";

const OverviewPage = () => {
  const left = useRef(null);
  const [width, height] = useSize(left);
  const [statsCurr, setstatsCurr] = useState();
  const [stats, setStats] = useState([]);
  const [toggle, setToggle] = useState("rev");

  let navigate = useNavigate();

  const [getStatistics, { data: dataS, status, isLoading, error, isError }] =
  useGetStatisticsMutation();
  const [tempData, setTempData] = useState([])
  useEffect(() => {
    if (status === QueryStatus.fulfilled) {
      console.log(dataS);
      setTempData(dataS);
    } else if (isError) {
      console.log(error.data.initialized);
      let errToastMessage = "";
      if (error.status === 400) {
        errToastMessage = `ERROR: 400 BAD REQUEST`;
      } else if (error.status === 500) {
        errToastMessage = `ERROR: 500 INTERNAL SERVER ERROR`;
      }
    }
  }, [status, error]);


  const statistics = useSelector((state) => state.statistics);
  const {companyId} = useSelector((state) => state.persistedReducer.global);

  useEffect(() => {
    console.log(statistics)
    if(statistics.eD && statistics.event.id){
      getStatistics({cID: companyId, eID: statistics.event.id, sD: statistics.sD, eD: statistics.eD})
    }
  }, [statistics]);

  const [data, setData] = useState([])

  useEffect(() => {
    let tempp = []
    if(tempData.segments){
      if(toggle === "rev"){
        tempData.segments.map((item)=>{
          let ppp = item.startSegmentDate;
          tempp.push({x: ppp.slice(0, ppp.indexOf("T")), y:item.revenue})
        })
        setData(tempp)
      }else{
        tempData.segments.map((item)=>{
          let ppp = item.startSegmentDate;
          tempp.push({x: ppp.slice(0, ppp.indexOf("T")), y:item.orders})
        })
        setData(tempp)
      }
    }
    console.log(tempp)
  }, [tempData, toggle]);






















  
  const loggedin = useSelector(
    (state) => state.persistedReducer.global.isLoggedIn
  );
  useEffect(() => {
    if (!loggedin) {
      navigate("/");
    }
  }, [loggedin]);

  useEffect(() => {
    
  }, [toggle]);

  // const data = [
  //   { x: "2020-01-01", y: 2 },
  //   { x: "2020-02-01", y: 3 },
  //   { x: "2020-03-01", y: 5 },
  //   { x: "2020-04-01", y: 4 },
  //   { x: "2020-05-01", y: 7 },
  // ];

  const triggerStats = (i) => {
    if (statsCurr === i) {
      setstatsCurr();
      setStats([
        {
          target: ["data"],
          eventKey: "all",
          mutation: () => {
            return { style: { fill: "blue" } };
          },
        },
        {
          target: ["labels"],
          eventKey: "all",
          mutation: () => {
            return { active: false };
          },
        },
      ]);
      return;
    }
    setstatsCurr(i);
    var temp = [];
    data.map((item, index) => {
      if (index != i) {
        temp.push(index);
      }
    });
    setStats([
      {
        target: ["data"],
        eventKey: i.toString(),
        mutation: () => {
          return { style: { fill: "lightgreen" } };
        },
      },
      {
        target: ["data"],
        eventKey: temp,
        mutation: () => {
          return { style: { fill: "blue" } };
        },
      },
      {
        target: ["labels"],
        eventKey: i.toString(),
        mutation: () => {
          return { active: true };
        },
      },
      {
        target: ["labels"],
        eventKey: temp,
        mutation: () => {
          return { active: false };
        },
      },
    ]);
  };

  return (
    <div className="OverviewPage-external">
      <div className="OverviewPage-internal">
        <h1>Overview</h1>
        <div className="OverviewPage-wrapper">
          <div className="OverviewPage-top">
            <span>Show data for: </span>
            <div className="OverviewPage-top-div">
              <SearchFilters />
            </div>
          </div>
          <div className="OverviewPage-middle">
            <div className="OverviewPage-middle-inner">
              <div className="OverviewPage-middle-top">Revenue</div>
              <div className="OverviewPage-middle-bot">{tempData.totalRevenue}</div>
            </div>
            <div className="OverviewPage-middle-inner">
              <div className="OverviewPage-middle-top">Orders</div>
              <div className="OverviewPage-middle-bot">{tempData.totalOrders}</div>
            </div>
          </div>
          {data.length > 0 &&<div className="OverviewPage-bot">
            <div className="OverviewPage-bot-top">
              <span>Event Statistics</span>
              <div className="OverviewPage-bot-radios">
                <div className="OverviewPage-bot-radios-item">
                  <input
                    value="rev"
                    type="radio"
                    name="expOpt"
                    id="radio3"
                    defaultChecked={toggle === "rev"}
                    onClick={(e) => {
                      setToggle(e.target.value);
                    }}
                  />
                  <label htmlFor="radio3" className="{ radioDis: !select}">
                    Revenue
                  </label>
                </div>
                <div className="OverviewPage-bot-radios-item">
                  <input
                    value="ord"
                    type="radio"
                    name="expOpt"
                    id="radio4"
                    defaultChecked={toggle === "ord"}
                    onClick={(e) => {
                      setToggle(e.target.value);
                    }}
                  />
                  <label htmlFor="radio4" className="{ radioDis: !select}">
                    Orders
                  </label>
                </div>
              </div>
            </div>
            <div className="OverviewPage-bot-inner">
              <div ref={left} className="OverviewPage-bot-left">
                <VictoryChart domainPadding={20}>
                  <VictoryAxis
                    // tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={(y) => {y.slice(5)}}
                  />
                  <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1}`} />
                  <VictoryGroup style={{ data: { fill: "blue" } }} data={data}>
                    <VictoryLine
                      name="line"
                      style={{
                        data: {
                          stroke: "#007281",
                        },
                        parent: { border: "1px solid #ccc" },
                      }}
                    />
                    <VictoryScatter
                      labels={({ datum }) => `${datum.y}`}
                      labelComponent={
                        <VictoryTooltip dy={-7} style={{ fontSize: 14 }} />
                      }
                      size={4}
                      externalEventMutations={stats}
                      events={[
                        {
                          target: "data",
                          eventHandlers: {
                            onClick: () => {
                              return [
                                {
                                  target: "data",
                                },
                              ];
                            },
                          },
                        },
                      ]}
                    />
                  </VictoryGroup>
                </VictoryChart>
              </div>
              <div
                className="OverviewPage-bot-right"
                style={{ maxHeight: height - 40 }}
              >
                {data.map((item, i) => {
                  return (
                    <div
                      key={uuidv4()}
                      className={`OverviewPage-bot-right-item ${
                        statsCurr === i
                          ? "OverviewPage-bot-right-item-clicked"
                          : ""
                      }`}
                      onClick={() => {
                        triggerStats(i);
                      }}
                    >
                      <div className="OverviewPage-bot-right-item-top">
                        <span className="material-symbols-outlined OverviewPage-bot-right-item-dash">
                          check_indeterminate_small
                        </span>
                        <span className="OverviewPage-bot-right-item-txt">
                          {item.x}
                        </span>
                      </div>
                      <span className="OverviewPage-bot-right-item-line"></span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
