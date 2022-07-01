import "./OverviewPage.css";
import { Navigate } from "react-router-dom";
import MyTextBox from '../../sharedComponents/MyTextBox/MyTextBox'
import MyTextArea from "../../generalComponents/MyTextArea/MyTextArea";
import { useState } from "react";
import MyButton from "../../generalComponents/MyButton/MyButton";
import MySelectBox from "../../generalComponents/MySelectBox/MySelectBox";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryScatter, VictoryGroup } from 'victory';




const OverviewPage = () => {
	const [file_name, setFile_name] = useState("test");
	const [link, setLink] = useState();
	const [on_change_f, setOn_change_f] = useState();
	const [disabled, setDisabled] = useState();

	const data = [
		{quarter: 1, earnings: 13000},
		{quarter: 2, earnings: 16500},
		{quarter: 3, earnings: 14250},
		{quarter: 4, earnings: 19000}
	  ];

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
							<div className="OverviewPage-bot-left">
							<VictoryChart
								// domainPadding will add space to each side of VictoryBar to
								// prevent it from overlapping the axis
								// domainPadding={20}
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
							<div className="OverviewPage-bot-right">
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OverviewPage;