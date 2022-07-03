import "./navbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Destination.in</span>
        </Link>
        {user ? <div><FontAwesomeIcon icon={faUser} /> {user.username}</div> : (
          <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar