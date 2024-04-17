import "./Header.css";
import img from "./img.png";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Agyal</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <div className="headerImgWrapper">
        <img
          className="headerImg"
          src={img}
          alt="Agyal Blog Logo"
        />
      </div>
    </div>
  );
}
