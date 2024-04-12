import { Link, NavLink } from "react-router-dom"
import { AboutUs, ourPortfolio, whyUS } from "../Navbar/content"
import { FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa6"
import './Footer.css'
const Footer = () => {
  return (
    <div>

    <div className="py-5 px-2  bg-dark  row "  >
        
{/* ----------------------------------------------------- Start About Us --------------------------------------------------- */}
 <div style={{}} className="col-lg-3  mb-3">
    
    {AboutUs.map((About) => (
            <div key={About.id}>

              <NavLink className="link1  border-none text-light" to={About.url}>
                {About.title}
              </NavLink>
        </div>))}
    </div>
   

{/* ----------------------------------------------------- End About Us --------------------------------------------------- */}


{/* ----------------------------------------------------- START WHY Us --------------------------------------------------- */}

<div style={{}} className="col-lg-3 mb-3">
    
    {whyUS.map((why) => (
            <div key={why.id}>

              <NavLink className="link1 text-light border-none" to={why.url}>
                {why.title}
              </NavLink>
        </div>))}
    </div>
   

{/* ----------------------------------------------------- End WHY  Us --------------------------------------------------- */}

{/* ----------------------------------------------------- START Portfolio --------------------------------------------------- */}

 <div style={{}} className="col-lg-3 mb-3">
    
    {ourPortfolio.map((portfolio) => (
            <div key={portfolio.id}>

              <NavLink className="link1 text-light mb-3 border-none" to={portfolio.url}>
                {portfolio.title}
              </NavLink>
        </div>))}
    </div>



{/* ----------------------------------------------------- End Portfolio --------------------------------------------------- */}

<div className="col-lg-2 ">
<Link to={"/"}>
            <img
              className="logo"
              src="/src/assets/logo.png"
              style={{
                boxShadow: "3px 3px 5px #e0ab0f , -3px -3px 5px #f0790b ",
              }}
              width={150}
              height={60}
              alt=""
            />
          </Link>

          <span className="d-flex gap-5  my-3 text-light   " style={{ fontSize:"25px" ,width:"50px"}}>
<NavLink to={"https://www.linkedin.com/in/abdelrahman-abdelwahab-7034b3208/"}><FaLinkedin /></NavLink>
<NavLink to={"https://www.facebook.com/profile.php?id=100069089196548"}><FaFacebook /></NavLink> 
<NavLink to={"https://www.youtube.com/c/EngAbdelrahmanAbdelwahab"}><FaYoutube /></NavLink>   

     </span>
     <p className="text-light"> <b> © 2024 Egypt Education Platform</b></p>

</div>
      
    </div>
<div className="slide-main  ">
  


  <div className="slide">
              <img
                className="logo"
                src="/src/assets/img6.jpeg"
                width={150}
                height={60}
                alt=""
              />
                 <img
                className="logo"
                src="/src/assets/img5.png"
                width={150}
                height={60}
                alt=""
              />    <img
              className="logo"
              src="/src/assets/img4.jpg"
              width={150}
              height={60}
              alt=""
            />    <img
            className="logo"
            src="/src/assets/img3.png"
            width={150}
            height={60}
            alt=""
          />    <img
          className="logo"
          src="/src/assets/img2.jpg"
          width={150}
          height={60}
          alt=""
        />    <img
        className="logo"
        src="/src/assets/img1.png"
        width={150}
        height={60}
        alt=""
      />  

  </div>

  <div className="slide">
              <img
                className="logo"
                src="/src/assets/img6.jpeg"
                width={150}
                height={60}
                alt=""
              />
                 <img
                className="logo"
                src="/src/assets/img5.png"
                width={150}
                height={60}
                alt=""
              />    <img
              className="logo"
              src="/src/assets/img4.jpg"
              width={150}
              height={60}
              alt=""
            />    <img
            className="logo"
            src="/src/assets/img3.png"
            width={150}
            height={60}
            alt=""
          />    <img
          className="logo"
          src="/src/assets/img2.jpg"
          width={150}
          height={60}
          alt=""
        />    <img
        className="logo"
        src="/src/assets/img1.png"
        width={150}
        height={60}
        alt=""
      />  

  </div>
  
</div>

    </div>
  )
}

export default Footer
