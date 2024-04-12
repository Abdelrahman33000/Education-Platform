import CountUp from "react-countup"
import DefButton from "../../component/defButton"
import './Home.css'
import { NavLink , defer} from "react-router-dom"
import { FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa6"
const Home = () => {
  
  return (
    <div className="container  ">
      <p className="text-danger py-5"> WHO WE ARE ? </p>
  
  <section className="row">
<div className="col-lg-5 mt-3">

<p style={{fontSize:"30px" , fontWeight:"bolder" , fontFamily:"cursive"}}>Creating A Brighter  Future <br /> Every Day
</p>
<p style={{fontSize:"20px" , color:"red"}}> We Pride Ourselves To Do Things Differently
</p>

<p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit sit quae ut magni, ex aliquam adipisci beatae pariatur incidunt expedita facilis iusto sint atque, ducimus voluptas earum nulla distinctio exercitationem?</p>

<DefButton text="Learn More" />
</div>

<div className="col-lg-6 d-flex justify-content-end mx-auto my-3" >
<img src="/src/assets/learn1.webp" alt="" style={{width:"100%"}} />
</div>
  </section>

<p style={{fontSize:"100px"}} className="opacity-50"> About Us </p>
<p style={{fontSize:"30px"}} className=" text-danger text-center">  WELCOME MESSAGE </p>


<section className="my-3 row  justify-content-between">
<div className="col-lg-4">
<img src="/src/assets/abdo.png" alt="" width={"100%"}  className="mx-auto"/>
</div>
<div className="col-lg-5 ">
    <p className="py-5 opacity-50"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellendus deserunt molestiae debitis delectus exercitationem optio cupiditate? Corrupti, et veniam veritatis nihil vero exercitationem, odit dignissimos porro quidem quae suscipit.</p>
    
    <DefButton text="Learn More"/>
    <p className="my-5" style={{fontFamily:"cursive", fontSize:"30px"}}>Abdelrahman Abdelwahab : <br />
     Front End Developer :
      Civil Engineer</p>
</div>
</section>


<p style={{fontSize:"70px"}} className="opacity-50 my-5"> Our Platform </p>


<section className="bg-dark  mx-auto text-light my-5  rounded-5 row" style={{filter:"5px" , fontSize:"30px" , fontFamily:"cursive" , WebkitTextStroke:"1px"}}  >

<div  className="col-lg-4 my-5  text-center" >
 <div className="">
   <CountUp start={0} end={51}  duration={10}     /> +
   <p> Number of Assets </p>
 </div>
  
  <CountUp start={0} end={1200}  duration={10}     />k +
  
  <p>Student Capacity</p>
</div>


<div  className="col-lg-4 my-5  text-center">
  <CountUp start={0} end={9}  duration={10}     />
  
  <p>Number of Schools</p>
  
  
  <CountUp start={0} end={8}  duration={10}     />
  
  <p>Number of Nurseries</p>
</div>

<div  className="col-lg-4 my-5  text-center">
  <CountUp start={0} end={21}  duration={10}     />
  
  
  <p> Number of Streams </p>
  <CountUp start={0} end={30}  duration={10}     />
  
  <p> Curriculum Offered </p>
</div>
</section>




<h3> Get In Touch With Us</h3>
<section className="row mx-auto my-5">

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

export default Home
