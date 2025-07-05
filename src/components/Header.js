import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Header = () => {

  const [buttomName,setbuttomName] = useState("login");
  const online=useOnlineStatus();
  return (
    
    <div className="header">
      <div className="logo-container">
        <img className="logo" src= {LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{online ?'✅':'🔴'}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            buttomName==="login"
            ?setbuttomName("logout")
            :setbuttomName("login");

          }}>{buttomName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;