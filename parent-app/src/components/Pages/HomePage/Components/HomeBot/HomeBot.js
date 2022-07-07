import "./HomeBot.css";

const HomeBot = () => {
	return (
		<div className="HomeBot-external">
			<div className="HomeBot-btn HomeBot-btnL">
				<span><pre>Εγγραφή</pre>στο</span>
			</div>
			<div onClick={()=>{
				window.location.assign('http://localhost:3002/');
			}} className="HomeBot-btn HomeBot-btnR">
				<span><pre>Είσαι</pre>Provider;</span>
			</div>
		</div>
	);
};

export default HomeBot;