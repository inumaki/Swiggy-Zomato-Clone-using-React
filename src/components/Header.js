import { Link } from "react-router-dom";
import Authorization from "./Authorization";
const Header = () => {
  return (
    <div className="header">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <div>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>ContactUs</li>
          </Link>

          <li>Cart</li>
          <li>
            <Authorization />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;
