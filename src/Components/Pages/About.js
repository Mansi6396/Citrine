import { Card, Grid } from "@mui/material";
import React, { useEffect } from "react";
import about from "../../Images/about.jpg";
import ideas from "../../Images/ideas.jpg";
import "./About.css";
import AOS from "aos"
import 'aos/dist/aos.css'

function About() {

  useEffect (()=>{
    AOS.init({
      duration:2000
    });
  },[])

  return (
    <div>
      <Grid container style={{ marginTop: "0rem" }}>
        <Grid item xs={12}>
          <img width="100%" height={280} src={about} />
        </Grid>
      </Grid>
      <h1 style={{textAlign:"center",margin:"2% 0% 4% 0%",color:"#FF9D5C"}} data-aos="fade-down">About Us</h1>
      <Grid container>
        <Grid items xs={12} md={6}>
          <h3 style={{textAlign:"start",marginLeft:"7%"}} data-aos="fade-right">
            <strong style={{ color: "#FF9D5C"}}>//</strong> {""}Who We Are?
          </h3>
          <p
            style={{
              textAlign: "start",
              fontSize: "18px",
              color: "gray",
              
              marginLeft: "7%",
              marginTop: "5%",
            }}
            data-aos="slide-right"
          >
            We are Citrine Print Pack. Since our establishment in the year 2021,
            we have been offering high quality print services all across
            Gujarat. We work with the objective to offer premium and superior
            printing services combining quality and affordability. On-time
            delivery at competitive prices remains our specialty. Our clients
            prefer us for our highest commitment levels, innovative thinking and
            delivery within deadlines. More than a printer, we are preferred for
            our distinguishing advice on design development and collateral
            printing.
          </p>
        </Grid>
        <Grid items xs={12} md={6}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} md={6}  sm={4} >
              <Card className="card"  >
                <div data-aos="zoom-out">
                <img src={ideas} alt="name" className="cardImage" data-aos="Zoom-in"/>
                <h6 className="name">Discover Ideas</h6>
                </div>
              </Card>
              <Card className="card"  >
              <div data-aos="zoom-out">
                <img src={ideas} alt="name" className="cardImage" data-aos="Zoom-in"/>
                <h6 className="name">Development</h6>
                </div>
              </Card>
            </Grid>
            <Grid item  xs={12} md={6}  sm={4} >
              <div className="ideapart2">
                <Card className="card"  >
                <div data-aos="zoom-out">
                  <img src={ideas} alt="name" className="cardImage" data-aos="Zoom-in"/>
                  <h6 className="name">Creative Design</h6>
                  </div>
                </Card>
                <Card className="card"  >
                <div data-aos="zoom-out">
                  <img src={ideas} alt="name" className="cardImage" data-aos="Zoom-in"/>
                  <h6 className="name">Deliver</h6>
                  </div>
                </Card>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
