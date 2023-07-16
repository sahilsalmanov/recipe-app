import axios from "axios";
import Cookies from "js-cookie";
import React, {useState, useEffect} from "react";
import Swal from "sweetalert2";
import { useNavigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [userVerified, setUserVerified] = useState(false);
  const navigate = new useNavigate();

  useEffect(()=>{
    if (Cookies.get("jwt")) {
      axios
        .post("/api/auth/verify-user", { token: Cookies.get("jwt") })
        .then((res) => {
          if (res.status === 200 && res.data.isAuth) {
            setUserVerified(true);
            console.log("User is verified");
          } else {
            setUserVerified(false);

          navigate("/login", {replace : true})
          }
        });
    } else {
      setUserVerified(false);

      console.log("User is not Genuine");
      navigate("/login", {replace : true})
    }
  },[])

  return (
    <div>
      {userVerified ? <Outlet /> : navigate("/login", { replace: true })}
    </div>
  );
};

export default PrivateRoute;
