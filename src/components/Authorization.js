import { useState } from "react";

const Authorization = () => {
  const [loggedIn, setLoggedIn] = useState(1);

  return (
    <>
      <button
        className="loggin-btn"
        onClick={() => {
          setLoggedIn(loggedIn ? 0 : 1);
        }}
      >
        {loggedIn ? 'LogOut' : 'LogIn'}
      </button>
    </>
  );
};
export default Authorization;
