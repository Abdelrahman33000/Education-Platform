import Navbar from "../Navbar/Navbar"
import './Header.css'
import { FaLinkedin , FaPhone } from "react-icons/fa6";
import { FaFacebook  , FaYoutube} from "react-icons/fa";
import DefButton from "../defButton";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {/* --------------------------------------Start Navbar--------------------------------------------- */}
        <Navbar />
      {/* --------------------------------------End Navbar--------------------------------------------- */}

      {/* --------------------------------------Start Icon--------------------------------------------- */}
        <span className="d-flex gap-5 ps-5 my-5 text-light " style={{flexDirection:"column" , fontSize:"25px" ,width:"50px"}}>
<NavLink to={"https://www.linkedin.com/in/abdelrahman-abdelwahab-7034b3208/"}><FaLinkedin /></NavLink>
<NavLink to={"https://www.facebook.com/profile.php?id=100069089196548"}><FaFacebook /></NavLink> 
<NavLink to={"https://www.youtube.com/c/EngAbdelrahmanAbdelwahab"}><FaYoutube /></NavLink>   

     </span>
      {/* --------------------------------------End Icon--------------------------------------------- */}

<div className="text-center" style={{position:"relative"}}>
<p className="title  text-center " style={{fontSize:"30px"}}> Creating A Brighter <br /> Future Every Day</p>
<DefButton text="Learn More" />
</div>
<span className="my-5 p-1 rounded-3 text-light" style={{rotate:"-90deg",backgroundColor:"#000" ,  display:"inline-block" , fontSize:"20px", boxShadow:"3px 3px 15px #888282"}}>
<FaPhone className="text-light"/>  +201011815928  
</span>


    </div>
  )
}

export default Header