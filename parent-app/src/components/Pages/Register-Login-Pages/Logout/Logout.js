import "./Login.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CircleLoader from "react-spinners/CircleLoader";
import { logout } from "../../../../store/globalSlice";

const Login = ({ changeLoadingState }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return <CircleLoader />;
};

export default Login;
