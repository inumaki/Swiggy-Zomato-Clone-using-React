import { Link } from "react-router-dom";
import Authorization from "./Authorization";
import logo from "../assest/img/epicEats.png";

const Topic = () => {
  return (
    <>
      <img className="m-1 ml-5 p-1 h-15 w-20" src={logo} alt="Epic Eats Logo" />
    </>
  );
};

const Header = () => {
  return (
    <div className="bg-not-perfect-grey shadow-sm text-vibrant-red font-mono text-lg fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-3 py-2">
        <Topic />
        <ul className="flex space-x-4 font-bold">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
        <div className="space-x-4">
          <Authorization />
        </div>
      </div>
      <div className="px-4">
        {" "}
        {/* Add padding to create spacing */}
        <hr className="border-t-2 border-white" />{" "}
        {/* White line after the navbar */}
      </div>
    </div>
  );
};

export default Header;
