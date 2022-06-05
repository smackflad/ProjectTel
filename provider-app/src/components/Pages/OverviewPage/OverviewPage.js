import "./OverviewPage.css";
import { Navigate } from "react-router-dom";
import MyTextBox from '../../sharedComponents/MyTextBox/MyTextBox'
import MyTextArea from "../../generalComponents/MyTextArea/MyTextArea";
import { useState } from "react";
import MyButton from "../../generalComponents/MyButton/MyButton";
import MySelectBox from "../../generalComponents/MySelectBox/MySelectBox";

const OverviewPage = () => {
	const [file_name, setFile_name] = useState("test");
	const [link, setLink] = useState();
	const [on_change_f, setOn_change_f] = useState();
	const [disabled, setDisabled] = useState();


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