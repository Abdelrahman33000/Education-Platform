import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const About = () => {
  return (
    <div className="container">
      
<div className=" row d-flex mx-auto  my-5 p-2 rounded-5 justify-content-between"  style={{backgroundColor:"#cac8c8"}}>
<div className="col-lg-5" >
    <h2>Our Mission</h2>
    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, dolores. Vitae modi alias nisi odit fugit, ipsum qui voluptatibus doloribus magnam debitis at, autem voluptatem cum quasi, maxime sapiente provident.</p>

    <span className="d-flex gap-5  my-3 pt-5 text-light  " style={{ fontSize:"25px" ,width:"50px"}}>
<NavLink to={"https://www.linkedin.com/in/abdelrahman-abdelwahab-7034b3208/"}><FaLinkedin /></NavLink>
<NavLink to={"https://www.facebook.com/profile.php?id=100069089196548"}><FaFacebook /></NavLink> 
<NavLink to={"https://www.youtube.com/c/EngAbdelrahmanAbdelwahab"}><FaYoutube /></NavLink>   

     </span>
</div>

<div className="col-lg-5">
    <img src="/src/assets/learn1.webp" className="rounded-5 " alt="" width={"100%"}  />
</div>
</div>



<div className=" row d-flex mx-auto  my-5 p-2 rounded-5 justify-content-between" style={{backgroundColor:"#cac8c8"}}>
<div className="col-lg-5">
    <img src="/learning.jpg" className="rounded-5 " alt="" width={"100%"}  />
</div>
<div className="col-lg-5"  >
    <h2>Our Vision</h2>
    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, dolores. Vitae modi alias nisi odit fugit, ipsum qui voluptatibus doloribus magnam debitis at, autem voluptatem cum quasi, maxime sapiente provident.</p>

    <span className="d-flex gap-5  my-3 pt-5 text-light  " style={{ fontSize:"25px" ,width:"50px"}}>
<NavLink to={"https://www.linkedin.com/in/abdelrahman-abdelwahab-7034b3208/"}><FaLinkedin /></NavLink>
<NavLink to={"https://www.facebook.com/profile.php?id=100069089196548"}><FaFacebook /></NavLink> 
<NavLink to={"https://www.youtube.com/c/EngAbdelrahmanAbdelwahab"}><FaYoutube /></NavLink>   

     </span>
</div>


</div>

      <section className="row container mx-auto">
    <p style={{fontSize:"30px"}}>Egypt’s Fastest Growing Education Provider</p>
<div className="container">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci placeat quisquam quibusdam! Tempore, neque! Placeat voluptatem quidem sed, asperiores maxime soluta vero, rem reprehenderit doloremque dolore odio minus nemo eum quos quae explicabo atque beatae molestias incidunt dolores? Quidem, exercitationem nisi, dolores modi similique animi tempora earum quasi explicabo quis corrupti? Consectetur ex, praesentium ipsum dolore excepturi rem quisquam reiciendis, libero, cupiditate harum pariatur dicta? Minima dicta quia qui maxime atque adipisci, tempore commodi, at accusantium dolorem temporibus iusto perferendis cum consequatur totam autem sunt. Consectetur harum reiciendis laboriosam eius fuga repellendus voluptates deserunt soluta consequatur eligendi corrupti quidem id hic nemo sed, magnam facere obcaecati molestias? Temporibus laborum illo neque minus maiores maxime earum minima eum nihil sapiente! Iusto perferendis porro vitae et, laudantium eum iste, culpa itaque quaerat nihil eveniet rerum consequatur? Natus in ea laudantium fugiat quibusdam repellendus officiis! Asperiores tempore, quam, illum accusantium reprehenderit culpa temporibus repudiandae perferendis voluptatum, debitis consequatur quod. Ipsam ut et aliquid, cumque illo aspernatur non recusandae voluptates ipsum. Mollitia vel dolorem dolore saepe in dicta tempora consequuntur consequatur impedit veritatis nulla illum sit iusto ut suscipit ipsa sequi quaerat iure quae beatae, quod, deleniti vero? Excepturi ea iusto optio magni, eos expedita error fugit quasi nostrum? Quam eligendi dolore reprehenderit fuga suscipit accusantium culpa atque et voluptatum quis dolor excepturi aspernatur, impedit doloribus, eos iure incidunt cumque saepe distinctio delectus! Quod corrupti molestiae mollitia, accusantium autem voluptate tempora. Quisquam voluptatem asperiores non alias! Cupiditate id aspernatur facilis itaque amet, repellat at omnis obcaecati odit, quos enim! Temporibus autem quibusdam alias! Ut, ex? Tempora ipsa suscipit voluptatibus porro soluta veniam dolorem deserunt optio dolorum perspiciatis aliquid quos alias, temporibus rem ducimus facilis nostrum odio natus dolore molestiae quod. Quis id veritatis expedita praesentium, laboriosam porro ut ipsum architecto, laborum optio molestias dolorem.</p>
</div>
      </section>
    </div>
  )
}

export default About
