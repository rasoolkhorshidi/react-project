import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <div className={style.header}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us </Link>
          </li>
          <li>
            <Link to="/createarticle">Create Article</Link>
          </li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
