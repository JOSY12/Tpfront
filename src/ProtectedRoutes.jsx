import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
// import { getCurrentUser} from "./redux/actions";
import ClipLoader from "react-spinners/ClipLoader";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import BlockPopUp from "./components/BlockPopup/BlockPopup";


function ProtectedRoutes() {
  const { isAuthenticated, isLoading, getAccessTokenSilently, user } = useAuth0();


  //HAY QUE VERIFICAR QUE SU EMAIL ESTÉ VERIFICADO Y 
  // QUE TENGA TODOS LOS CAMPOS NECESARIOS LLENOS
  return (
    
    isAuthenticated  ? (
    <Outlet />
    ) : isLoading ? 
    ( <div
      style={{
        marginTop: "10rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      >
      <ClipLoader color="#ef8354" size={70} margin={10} />
      </div>
    ) 
    :
    (
    <LoginPopup />
    )
  )
}

export default ProtectedRoutes;