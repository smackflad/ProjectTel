import "./myHomePage.css";
import HomeBot from "./Components/HomeBot/HomeBot";
import Middle_Component from "./Components/Middle_Component/Middle_Component";

import MySearchBar from "../../generalComponents/MySearchBar/MySearchBar";

const HomePage = () => {
  return (
    <div className="homePage-external">
      <MySearchBar />
      <Middle_Component />
      <HomeBot />
    </div>
  );
};

export default HomePage;
