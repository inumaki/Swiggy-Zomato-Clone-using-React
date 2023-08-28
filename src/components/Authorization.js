import { useContext, useState } from "react";
import { Auth} from "../context/AuthContext";

const Authorization = () => {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn, logIn, logOut} = Auth();
  return (
    <div className="flex ">
      {isLoggedIn ? (
        <button onClick={logOut}>{"Log out"}</button>
      ) : (
        <button onClick={logIn}>
          { "Log in" }  
        </button>
      )}
    </div>
  );
};
export default Authorization;
