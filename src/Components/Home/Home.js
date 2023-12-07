import React, { useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import homeimg from "../../Images/homeimg.jpeg";
import Header from "../Header/Header";
import { Grid } from "@mui/material";
import AOS from "aos"
import 'aos/dist/aos.css'

function Home() {

  useEffect (()=>{
    AOS.init({
      duration:2000
    });
  },[])

  return (
    <>
   
   
      {/* <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row"> 
                <div className="col-6 col-s-6  menu ">
                  <h1>
                    Grow your business with{" "}
                    <strong className="brand-name">Citrin PrintPack</strong>
                  </h1>
                  <h2 className="my-3 mt-5">
                    We are in Printing Business since 2021. We provide the world
                    best printing Solution For Our Customer at Citrine Print
                    Pack Through Germany's Best Printing Machinery and Our
                    Technique.
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/service" className="mt-3 btn-get-started">
                      {" "}
                      Get Started
                    </NavLink>
                  </div>
                </div>

                <div className="col-6 col-s-9">
                  <div className=" header-img">
                    <img
                      src={homeimg}
                      className="img-fluid animated"
                      alt="home img"
                      style={{height:"500px"}}
                    />
                  </div>
                </div>

               
              </div>

            </div>
          </div>
        </div>
      </section> */}
     <div style={{padding: "10px 10px 10px 10px"}}>
     <Grid container spacing={1} style={{marginTop:'3rem',padding:'20px 20px'}}>
        <Grid items xs={12} md={6}>
     
        <div style={{marginRight:'7%'}}>
            
            <div className=" header-img" data-aos="zoom-out">
                    <img
                      src={homeimg}
                      className="img-fluid animated"
                      alt="home img"
                      style={{height:"500px"}}
                    />
                  </div>
          </div> 
        </Grid>
        <Grid items xs={12} md={6}>
        <div style={{marginLeft:'7%'}} >
           
           <div className="col-10 col-s-6 ">
                 <h1>
                   Grow your business with{" "}
                   <strong className="brand-name" data-aos="zoom-out">Citrin PrintPack</strong>
                 </h1>
                 <h2 >
                   We are in Printing Business since 2021. We provide the world
                   best printing Solution For Our Customer at Citrine Print
                   Pack Through Germany's Best Printing Machinery and Our
                   Technique.
                 </h2>
                 <div className="mt-3">
                   <NavLink to="/service" className="mt-3 btn-get-started">
                     {" "}
                     Get Started
                   </NavLink>
                 </div>
                 </div>
         </div>
       
        </Grid>
      </Grid>
     </div>
    </>
  );
}

export default Home;

// <div className="row">
//             <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
//               <h1>
//                 Grow your business with <strong className="brand-name">CITRINE PRINTPACK</strong>
//               </h1>
//               <h2 className="my-3">
//               We are in Printing Business since 2021. We provide the world best printing
//                 Solution For Our Customer at Citrine Print Pack Through
//                 Germany's Best Printing Machinery and Our Technique.
//               </h2>
//               <div className="mt-3">
//                   <NavLink to="/service" className="btn-get-started"> Get Started</NavLink>
//               </div>
//             </div>

//             <div className="col-lg-6 order-1 order-lg-2 header-img">
//             <img width="100%" src={homeimg} className="img-fluid animated" alt="home img" />
//             </div>
//             </div>
