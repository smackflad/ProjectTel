import "./HomeBot.css";

import { Navigate } from "react-router-dom";

const HomeBot = () => {
	return (
		<div className="HomeBot-external">
			<div className="HomeBot-btn HomeBot-btnL">
				<span><pre>Εγγραφή</pre>στο</span>
			</div>
			<div className="HomeBot-btn HomeBot-btnR">
				<span><pre>Είσαι</pre>Provider;</span>
			</div>
		</div>
	);
};

export default HomeBot;