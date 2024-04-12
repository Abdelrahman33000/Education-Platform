import { PartnersSec } from "./content"

const Partners = () => {
  return (
    <div>
      <div className="slide-main  ">
  <div className="slide">
              <img
                className="logo"
                src="/img6.jpeg"
                width={150}
                height={60}
                alt=""
              />
                 <img
                className="logo"
                src="/img5.png"
                width={150}
                height={60}
                alt=""
              />    <img
              className="logo"
              src="/img4.jpg"
              width={150}
              height={60}
              alt=""
            />    <img
            className="logo"
            src="/img3.png"
            width={150}
            height={60}
            alt=""
          />    <img
          className="logo"
          src="/img2.jpg"
          width={150}
          height={60}
          alt=""
        />    <img
        className="logo"
        src="/img1.png"
        width={150}
        height={60}
        alt=""
      />  

  </div>
  <div className="slide">
              <img
                className="logo"
                src="/img6.jpeg"
                width={150}
                height={60}
                alt=""
              />
                 <img
                className="logo"
                src="/img5.png"
                width={150}
                height={60}
                alt=""
              />    <img
              className="logo"
              src="/img4.jpg"
              width={150}
              height={60}
              alt=""
            />    <img
            className="logo"
            src="/img3.png"
            width={150}
            height={60}
            alt=""
          />    <img
          className="logo"
          src="/img2.jpg"
          width={150}
          height={60}
          alt=""
        />    <img
        className="logo"
        src="/img1.png"
        width={150}
        height={60}
        alt=""
      />  

  </div>
</div>

    <div className="row container">
      <div className="col-lg-5 ">
        <img src="/imgn.jpeg" alt="" width={"100%"} />
      </div>
      <div className="col-lg-5 mx-auto my-5">
          <p style={{fontSize:"30px" , color:"red"}}> Investors & Partners </p>
          <p className="opacity-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis odio pariatur, culpa explicabo alias consequatur deleniti doloremque doloribus ad repellendus eaque repudiandae ullam, reiciendis harum, quisquam quasi tempora officia consectetur!</p>
        
      </div>
    </div>


    <section className="container ">
      {PartnersSec.map((partner)=><div key={partner.id} className="row ">
<div className="col-lg-5">
  <img src={partner.img} alt="" width={"100%"} />

</div>
<div className="col-lg-6">
  <p style={{fontSize:"30px"}}>  {partner.title}</p>
  {partner.dis}
</div>
      </div>)}
    </section>
 
      
    </div>
  )
}

export default Partners
