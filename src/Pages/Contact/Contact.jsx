import { NavLink } from "react-router-dom"
import DefButton from "../../component/defButton"
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6"

const Contact = () => {
  return (
    <div className="">
      
<div className=" d-flex">
          <img src="/undraw_online_test_re_kyfx.svg" alt="" className="mx-auto px-5 my-3 " width={"100%"} />
    
</div>      <h3 className="my-5 p-3"> Get In Touch With Us</h3>
<section className="row mx-auto my-5 container">

<div className="col-lg-5 mb-5 ">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37809421798!2d31.217264617826068!3d30.059482028208123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1712791756896!5m2!1sen!2seg" width="100%" height="450px"  allowfullscreen="" loading="lazy"  />
</div>
<div className="col-lg-4 mx-auto" >
<h3> Contact Us</h3>

<form>
  <input type="text" name="" id="" placeholder="First Name" className="my-1 p-1" style={{width:"100%"}} required/> <br />
  <input type="email" name="" id=""  className="my-1 p-1" placeholder="Email" style={{width:"100%"}} required/> <br />
  <textarea  placeholder="Message" id=""  rows={5}  className="my-3 w-100 p-1" required/> <br />
  <DefButton text="Send" />
</form>
<p className="text-center my-2"> Or reach us on social media</p>
<span className="d-flex gap-5  my-1 text-light  " style={{ fontSize:"25px" ,width:"50px"}}>
<NavLink to={"https://www.linkedin.com/in/abdelrahman-abdelwahab-7034b3208/"}><FaLinkedin /></NavLink>
<NavLink to={"https://www.facebook.com/profile.php?id=100069089196548"}><FaFacebook /></NavLink> 
<NavLink to={"https://www.youtube.com/c/EngAbdelrahmanAbdelwahab"}><FaYoutube /></NavLink>   

     </span>
</div>
</section>
    </div>
  )
}

export default Contact
