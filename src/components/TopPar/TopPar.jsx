import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import "./TopPar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://blogapp2-2.onrender.com/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://www.facebook.com/profile.php?id=100090135953046" className="link">
          <i className="topIcon fab fa-facebook-square"></i>
        </a>
        <a href="https://twitter.com/AgialTeam" className="link">
          <i className="topIcon fab fa-twitter-square"></i>
        </a>
        <a href="https://www.pinterest.com/agialteam/" className="link">
          <i className="topIcon fab fa-pinterest-square"></i>
        </a>
        <a href="https://www.instagram.com/agialteam/" className="link">
          <i className="topIcon fab fa-instagram-square"></i>
        </a>
        <a href="https://www.youtube.com/@AgialTeam" className="link">
          <i className="topIcon fab fa-youtube-square"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
