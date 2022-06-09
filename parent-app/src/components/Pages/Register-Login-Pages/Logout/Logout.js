import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CircleLoader from "react-spinners/CircleLoader";
import { logout } from "../../../../store/globalSlice";

const Logout = ({ changeLoadingState }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    navigate("/", { replace: true });
  }, [dispatch]);

  return <CircleLoader />;
};

export default Logout;
