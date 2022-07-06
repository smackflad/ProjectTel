import "./OverviewPage.css";
import {useEffect, useRef, useState } from "react";
import MySelectBox from "../../generalComponents/MySelectBox/MySelectBox";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryScatter, VictoryGroup, VictoryTooltip } from 'victory';
import { v4 as uuidv4 } from "uuid";

import useSize from '@react-hook/size'

const OverviewPage = () => {
	const left= useRef(null);
	const [width, height] = useSize(left)
	const [statsCurr, setstatsCurr] = useState();
	const [stats, setStats] = useState([]);
	const [toggle, setToggle ] = useState("rev");

	useEffect(() => {
		console.log(toggle)
	}, [toggle]);

	const data = [
		{ x: "2020-01-01", y: 2 },
		{ x: "2020-02-01", y: 3 },
		{ x: "2020-03-01", y: 5 },
		{ x: "2020-04-01", y: 4 },
	]

	const triggerStats = (i)=>{
		if(statsCurr === i){
			setstatsCurr();
			setStats(
				[
					{
						target: ["data"],
						eventKey: "all",
						mutation: () => {
						  return { style: { fill: "blue" } };
						}
					},
					{
						target: ["labels"],
						eventKey: "all",
						mutation: () => {
						return { active: false };
						}
					},
				]
			);
			return
		}
		setstatsCurr(i);
		var temp= [];
		data.map((item, index)=>{
			if(index != i){
				temp.push(index);
			}
		})
		setStats(
			[
				{
				  target: ["data"],
				  eventKey: i.toString(),
				  mutation: () => {
					return { style: { fill: "lightgreen" } };
				  }
				},
				{
					target: ["data"],
					eventKey: temp,
					mutation: () => {
					  return { style: { fill: "blue" } };
					}
				},
				{
					target: ["labels"],
					eventKey: i.toString(),
					mutation: () => {
					  return { active: true };
					}
				},
				{
					target: ["labels"],
					eventKey: temp,
					mutation: () => {
					return { active: false };
					}
				},
			]
		);
	}

	return (
		<div className="OverviewPage-external">
			<div className="OverviewPage-internal">
				<h1>Overview</h1>
				<div className="OverviewPage-wrapper">
					<div className="OverviewPage-top">
						<span>Show data for: </span>
						<div className="OverviewPage-top-div">
							<MySelectBox items={["test", "Test2", "Test3", "Test4"]} />
							<MySelectBox items={["test", "Test2", "Test3", "Test4"]}/>
						</div>
					</div>
					<div className="OverviewPage-middle">
						<div className="OverviewPage-middle-inner">
							<div className="OverviewPage-middle-top">
								Revenue
							</div>
							<div className="OverviewPage-middle-bot">
								$000000
							</div>
						</div>
						<div className="OverviewPage-middle-inner">
							<div className="OverviewPage-middle-top">
								Orders
							</div>
							<div className="OverviewPage-middle-bot">
								000000
							</div>
						</div>
					</div>
					<div className="OverviewPage-bot">
						<div className="OverviewPage-bot-top">
							<span>Event Statistics</span>
							<div class="OverviewPage-bot-radios">
								<div className="OverviewPage-bot-radios-item">
										<input value="rev" type="radio" name="expOpt" id="radio3" checked={toggle === "rev"} onClick={(e)=>{setToggle(e.target.value)}}/>
										<label for="radio3" class="{ radioDis: !select}" >Revenue</label>
								</div>
								<div className="OverviewPage-bot-radios-item">
										<input value="ord" type="radio" name="expOpt" id="radio4" checked={toggle === "ord"} onClick={(e)=>{setToggle(e.target.value)}} />
										<label for="radio4" class="{ radioDis: !select}" >Orders</label>
								</div>
							</div>
						</div>
						<div className="OverviewPage-bot-inner">
							<div ref={left} className="OverviewPage-bot-left">
							<VictoryChart
								domainPadding={20}
							>
								<VictoryAxis
									tickValues={[1, 2, 3, 4, 5]}
									tickFormat={(y) =>(y.slice(5))}
								/>
								<VictoryAxis
									dependentAxis
									tickFormat={(x) => (`$${x / 1}k`)}
								/>
								<VictoryGroup
									style={{ data: {fill: "blue"}}}
									data={data}
								>

								<VictoryLine name="line"
									style={{
										data: { 
											stroke: "#007281"
										},
										parent: { border: "1px solid #ccc"}
									}}
									
									/>
								<VictoryScatter 
									labels={({ datum }) => `${datum.y}`}
									labelComponent={
										<VictoryTooltip
										dy={-7}
										  style={{ fontSize: 14 }}	
										/>
									  }
								size={4}
								externalEventMutations={stats}
								events={[{
									target: "data",
									eventHandlers: {
									  onClick: () => {
										return [
										  {
											target: "data"
										  }
										];
									  }
									}
								  }]}
								  />
								</VictoryGroup>
							</VictoryChart>
							</div>
							<div className="OverviewPage-bot-right" style={{maxHeight: height-40}}>
								{data.map((item, i) =>{
									return(
										<div key={uuidv4()} className={`OverviewPage-bot-right-item ${statsCurr === i ? "OverviewPage-bot-right-item-clicked": ""}`} onClick={()=>{triggerStats(i)}}>
											<div className="OverviewPage-bot-right-item-top">
												<span className="material-symbols-outlined OverviewPage-bot-right-item-dash">
													check_indeterminate_small
												</span>
												<span className="OverviewPage-bot-right-item-txt">{item.x}</span>
											</div>
											<span className="OverviewPage-bot-right-item-line">
											</span>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OverviewPage;