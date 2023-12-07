import { Button, Card, Grid } from "@mui/material";
import React, { useEffect } from "react";
import books from "../../Images/books.jpeg";
import brochure from "../../Images/brochure.jpg";
import catalog from "../../Images/catalog.jpg";
import calender from "../../Images/calender.webp";
import posters from "../../Images/poster.webp";
import card from "../../Images/cards.webp";
import stationary from "../../Images/stationary.jpg";
import gift from "../../Images/gift.jpg";
import boxes from "../../Images/boxes.jpg";
import visualaids from "../../Images/visualaids.jpeg";
import art from "../../Images/art.avif";
import magazines from "../../Images/megazine.jpg";
import tabletop from "../../Images/tabletop.jpg";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos"
import 'aos/dist/aos.css'

function Products() {
  const navigate = useNavigate();
  useEffect (()=>{
    AOS.init({
      duration:2000
    });
  },[])
  return (
    <div>
      <div >
        <div style={{ fontSize: "3rem", fontWeight: "700", color: " #1CB5E0" }}>
          PRINTING SERVICE
        </div>
        <Grid container style={{padding:"5% 5% 5% 5%"}}>
          <Grid item xs={12} md={4} sm={6}>
            <Card className="container" onClick={()=>{navigate('/contactus')}} data-aos="fade-right">
              
                <img src={books} alt="name" className="containerImage" />
                <h6 className="containername">Books </h6>
               
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Card className="container" onClick={()=>{navigate('/contactus')}} data-aos="zoom-out">
              <div>
                <img src={brochure} alt="name" className="containerImage" />
                <h6 className="containername">Brochures</h6>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Card className="container" onClick={()=>{navigate('/contactus')}} data-aos="fade-left">
              <div>
                <img src={catalog} alt="name" className="containerImage" />
                <h6 className="containername">catalog</h6>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Card className="container" onClick={()=>{navigate('/contactus')}}  data-aos="fade-right">
              <div>
                <img src={calender} alt="name" className="containerImage" />
                <h6 className="containername">calender</h6>
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sm={6}>
            <Card className="container" onClick={()=>{navigate('/contactus')}} data-aos="zoom-out">
              <div>
                <img src={posters} alt="name" className="containerImage" />
                <h6 className="containername">posters</h6>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Card className="container" onClick={()=>{navigate('/contactus')}} data-aos="fade-left">
              <div>
                <img src={card} alt="name" className="containerImage" />
                <h6 className="containername">Buisiness card</h6>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={6} >
            <Card className="container" onClick={()=>{navigate('/contactus')}}  data-aos="fade-right">
              <div>
                <img src={stationary} alt="name" className="containerImage" />
                <h6 className="containername">stationary Label</h6>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Card className="container" onClick={()=>{navigate('/contactus')}}data-aos="zoom-out">
              <div>
                <img src={gift} alt="name" className="containerImage" />
                <h6 className="containername">Gift Pack</h6>
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sm={6}>
            <Card className="container" onClick={()=>{navigate('/contactus')}} data-aos="fade-left">
              <div>
                <img src={boxes} alt="name" className="containerImage" />
                <h6 className="containername">boxes</h6>
              </div>
            </Card>
          </Grid>
        </Grid>
        <div style={{ fontSize: "3rem", fontWeight: "700", color: "#1CB5E0" }}>
          Special Product services
        </div>
        <Grid container style={{padding:"5% 5% 5% 5%"}}>
          <Grid item xs={12} md={4} sm={6}>
            <Card className="container" onClick={()=>{navigate('/contactus')}}  data-aos="fade-right">
              <div>
                <img src={tabletop} alt="name" className="containerImage" />
                <h6 className="containername"> Table Top Calendars</h6>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Card className="container" onClick={()=>{navigate('/contactus')}} data-aos="zoom-out">
              <div>
                <img src={magazines} alt="name" className="containerImage" />
                <h6 className="containername"> Magazines</h6>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Card className="container" onClick={()=>{navigate('/contactus')}} data-aos="fade-left">
              <div>
                <img src={art} alt="name" className="containerImage" />
                <h6 className="containername"> Art Brochures</h6>
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sm={6}>
            <Card className="container" onClick={()=>{navigate('/contactus')}}  data-aos="fade-right">
              <div>
                <img src={visualaids} alt="name" className="containerImage" />
                <h6 className="containername"> Visual Aids</h6>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Products;
