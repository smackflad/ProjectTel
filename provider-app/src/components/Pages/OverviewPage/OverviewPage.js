import "./OverviewPage.css";
import {useRef, useState } from "react";
import MySelectBox from "../../generalComponents/MySelectBox/MySelectBox";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryScatter, VictoryGroup } from 'victory';
import { v4 as uuidv4 } from "uuid";

import useSize from '@react-hook/size'



const OverviewPage = () => {
	const left= useRef(null);
	const [width, height] = useSize(left)

	const data = [
		{quarter: 1, earnings: 13000},
		{quarter: 2, earnings: 16500},
		{quarter: 3, earnings: 14250},
		{quarter: 4, earnings: 19000}
	  ];

	const dates = ["2020-01-01", "2020-01-02", "2020-01-03", "2020-01-04", "2020-01-05", "2020-01-01", "2020-01-02", "2020-01-03", "2020-01-04", "2020-01-05"]

	return (
		<div className="OverviewPage-external">
			<div className="OverviewPage-internal">
				<h1>Overview</h1>
				<div className="OverviewPage-wrapper">
					<div className="OverviewPage-top">
						<span>Show data for: </span>
						<div className="OverviewPage-top-div">
							<MySelectBox />
							<MySelectBox />
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
						<span>Event Statistics</span>
						<div className="OverviewPage-bot-inner">
							<div ref={left} className="OverviewPage-bot-left">
							<VictoryChart
								domainPadding={20}
							>
								<VictoryAxis
									// tickValues specifies both the number of ticks and where
									// they are placed on the axis
									tickValues={[1, 2, 3, 4, 5]}
									tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 5"]}
								/>
								<VictoryAxis
									dependentAxis
									// tickFormat specifies how ticks should be displayed
									tickFormat={(x) => (`$${x / 1}k`)}
								/>
								<VictoryGroup
									data={[
									{ x: 1, y: 2 },
									{ x: 2, y: 3 },
									{ x: 3, y: 5 },
									{ x: 4, y: 4 },
									{ x: 5, y: 7 }
									]}
								>

								<VictoryLine
									style={{
									data: { stroke: "#c43a31" },
									parent: { border: "1px solid #ccc"}
									}}
								/>
								<VictoryScatter size={4}/>
								</VictoryGroup>
							</VictoryChart>
							</div>
							<div className="OverviewPage-bot-right" style={{maxHeight: height-40}}>
								{dates.map((item) =>{
									return(
										<div key={uuidv4()} className="OverviewPage-bot-right-item">
											<div className="OverviewPage-bot-right-item-top">
												<span className="material-symbols-outlined OverviewPage-bot-right-item-dash">
													check_indeterminate_small
												</span>
												<span className="OverviewPage-bot-right-item-txt">{item}</span>
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