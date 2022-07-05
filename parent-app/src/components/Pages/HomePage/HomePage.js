import "./myHomePage.css";
import HomeBot from "./Components/HomeBot/HomeBot";
import Middle_Component from "./Components/Middle_Component/Middle_Component";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FilterSearchBar from "./Components/FilterSearchBar/FilterSearchBar";
import { useState } from "react";

const HomePage = () => {
  const { accountInitialized, isLoggedIn } = useSelector(
    (state) => state.global
  );
  let navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn && !accountInitialized) navigate("/Register2");
  }, [accountInitialized]);

  const [search, setSearch] = useState("");

  return (
    <div className="homePage-external">
      <FilterSearchBar val={search} setVal={setSearch} />
      <Middle_Component />
      <HomeBot />
    </div>
  );
};

export default HomePage;
