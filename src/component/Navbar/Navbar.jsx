import { Link, NavLink } from "react-router-dom";
import { AboutUs, lists, ourPortfolio, whyUS } from "./content";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [about , setAbout] = useState(false);
  const [why , setWhy] = useState(false);
  const [Portfolio , setPortfolio] = useState(false);


  const [about1 , setAbout1] = useState(false);
  const [why1 , setWhy1] = useState(false);
  const [Portfolio1 , setPortfolio1] = useState(false);

  

  

 



  return (
    <div>
 {/*--------------------------------------------- .....Strart Navbar...---------------------------------------------------- */}
      <nav
        style={{
          display: "flex",
          padding: "10px 20px",
          justifyContent: "end",
          gap: "20px",
          alignItems: "center",
          
        }}
      >
        <div className="d-flex align-items-center">
          <FaSearch
            className=" text-light mx-3" style={{cursor:"pointer"}}
            onClick={() => {
              setSearch(true);
            }}
          />

          {search && (
            <div className="search d-flex justify-content-center pt-5">
                   <IoClose
              className="close"
              style={{ color: "red" , fontSize:"50px" }}
              onClick={() => {
                setSearch(false);
              }}
            />
              <input type="search" name="" id="" placeholder="search..." />
            </div>
          )}

          <Link to={"/"}>
            <img
              className="logo"
              src="/logo.png"
              style={{
                boxShadow: "3px 3px 5px #e0ab0f , -3px -3px 5px #f0790b ",
              }}
              width={150}
              height={60}
              alt=""
            />
          </Link>
        </div>


        <div style={{ flexGrow: "1" }} /> 

        <div className=" align-items-center nav">
          {lists.map((list) => (
            <div key={list.id}  onMouseOver={() => {
              
                if(list.id ==1){setAbout(true);} 
                if(list.id ==2){setWhy(true);}
                else if(list.id ==3)
                   { setPortfolio(true);} 
           }
            }
            onMouseLeave={() => {
                if(list.id ==1){

                    setAbout(false);
                    }
                    else if(list.id ==2){
                      setWhy(false);
                    } else if(list.id ==3)
                    { setPortfolio(false);} 
            }
            } >

              <NavLink className="link" to={list.url}>
                {list.title} {(list.id == 1 || list.id == 2 || list.id == 3) && <IoMdArrowDropdown style={{fontSize:"30px"}} />}

              </NavLink>

{/* ----------------------------------------------------- Start About Us --------------------------------------------------- */}
{about && list.id==1 && <div style={{position:"absolute" , backgroundColor:"#fff" , top:"65px" ,}}>
    
    {AboutUs.map((About) => (
            <div key={About.id}>

              <NavLink className="link1 text-dark border-none" to={About.url}>
                {About.title}
              </NavLink>
        </div>))}
    </div>
     }

{/* ----------------------------------------------------- End About Us --------------------------------------------------- */}


{/* ----------------------------------------------------- START WHY Us --------------------------------------------------- */}

{why && list.id==2 && <div style={{position:"absolute" , backgroundColor:"#fff" , top:"65px" ,}}>
    
    {whyUS.map((why) => (
            <div key={why.id}>

              <NavLink className="link1 text-dark border-none" to={why.url}>
                {why.title}
              </NavLink>
        </div>))}
    </div>
     }

{/* ----------------------------------------------------- End WHY  Us --------------------------------------------------- */}

{/* ----------------------------------------------------- START Portfolio --------------------------------------------------- */}

{Portfolio && list.id==3 && <div style={{position:"absolute" , backgroundColor:"#fff" , top:"65px" ,}}>
    
    {ourPortfolio.map((portfolio) => (
            <div key={portfolio.id}>

              <NavLink className="link1 text-dark border-none" to={portfolio.url}>
                {portfolio.title}
              </NavLink>
        </div>))}
    </div>
     }


{/* ----------------------------------------------------- End Portfolio --------------------------------------------------- */}


            </div>
          ))}
        </div>

        <IoMdMenu
          className="menu text-light " style={{cursor: 'pointer'}}
          onClick={() => {
            setMenu(!menu);
          }}
        />
      </nav>

 {/*__________________________________________- ..... End Navbar..._________________________________________________________ */}




 {/*----------------------------------------------- ...Start Popup...-------------------------------------------------------- */}

      {menu && (
        <div className=" align-items-center bg-dark popup py-2">
        {/* ... Start Close Icon */}
          <div
            className="d-flex justify-content-end pe-2 "
            style={{ display: "flex", justifyContent: "" }}
          >
            <IoClose
              className="close"
              style={{ color: "red" }}
              onClick={() => {
                setMenu(!menu);
              }}
            />

          </div>


          {/* ... End Close Icon */}


          {lists.map((list) => (
            <div key={list.id} className="my-3 "   onMouseOver={() => {
              
              if(list.id ==1){setAbout1(true);} 
              if(list.id ==2){setWhy1(true);}
              else if(list.id ==3)
                 { setPortfolio1(true);} 
         }
          }
          onMouseLeave={() => {
              if(list.id ==1){

                  setAbout1(false);
                  }
                  else if(list.id ==2){
                    setWhy1(false);
                  } else if(list.id ==3)
                  { setPortfolio1(false);} 
          }
          } >
              <NavLink
                className="link1"
                onClick={() => {
                  setMenu(!menu);
                }}
                to={list.url}
               >
                {list.title} {(list.id == 1 || list.id == 2 || list.id == 3) && <IoMdArrowDropdown style={{fontSize:"30px"}} />}
              </NavLink>



              
{/* ----------------------------------------------------- Start About Us --------------------------------------------------- */}
{about1 && list.id==1 && <div style={{position:"absolute" , backgroundColor:"#fff"  ,zIndex:20}}>
    
    {AboutUs.map((About) => (
            <div key={About.id}>

              <NavLink className="link1 text-dark border-none" to={About.url}    onClick={() => {
            setMenu(!menu);
            setAbout1(false)
            }}>
                {About.title}
              </NavLink>
        </div>))}
    </div>
     }

{/* ----------------------------------------------------- End About Us --------------------------------------------------- */}


{/* ----------------------------------------------------- START WHY Us --------------------------------------------------- */}

{why1 && list.id==2 && <div style={{position:"absolute" , backgroundColor:"#fff" ,zIndex:20}}>
    
    {whyUS.map((why) => (
            <div key={why.id}>

              <NavLink className="link1 text-dark border-none" to={why.url}   onClick={() => {
            setMenu(!menu);
            setWhy1(false)
          }}>
                {why.title}
              </NavLink>
        </div>))}
    </div>
     }

{/* ----------------------------------------------------- End WHY  Us --------------------------------------------------- */}

{/* ----------------------------------------------------- START Portfolio --------------------------------------------------- */}

{Portfolio1 && list.id==3 && <div style={{position:"absolute" , backgroundColor:"#fff" ,zIndex:20 }}>
    
    {ourPortfolio.map((portfolio) => (
            <div key={portfolio.id}>

              <NavLink className="link1 text-dark border-none" to={portfolio.url}   onClick={() => {
            setMenu(!menu);
            setPortfolio1(false);
          }}>
                {portfolio.title}
              </NavLink>
        </div>))}
    </div>
     }


{/* ----------------------------------------------------- End Portfolio --------------------------------------------------- */}

            </div>
          ))}
        </div>

        
      )}

 {/*------------------------------------------------- ...End Popup...--------------------------------------------------------- */}
    
    </div>
  );
};

export default Navbar;
