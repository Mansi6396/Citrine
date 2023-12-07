import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import printing from "../../Images/printing.webp";
import graphic from "../../Images/Graphic-designing.jpg";
import quality from "../../Images/quality.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Service() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={12} md={6} style={{ padding: "5% 5% 5% 5%" }}>
            <h4 style={{ textAlign: "start", fontSize: "4.5rem" }}>Services</h4>
            <div
              style={{
                fontSize: "3.5rem",
                fontWeight: "revert",
                textAlign: "start",
              }}
            >
              SPACIAL PRODUCT SERVICE
            </div>
          </Grid>
          <Grid item xs={12} md={6} style={{ padding: "5% 5% 5% 5%" }}>
            <div data-aos="flip-left">
              <img src={printing} width="95%" />
            </div>
          </Grid>
        </Grid>
        <Grid container style={{ backgroundColor: "black", height: "auto" }}>
          <Grid item xs={12} md={6} style={{ padding: "5% 5% 5% 5%" }}>
            <div data-aos="flip-right">
              <img src={graphic} style={{ borderRadius: "15px" }} width="95%" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <div
                style={{
                  color: "white",
                  marginTop: "6%",
                  fontSize: "2rem",
                  fontWeight: "500",
                }}
              >
                GRAPHIC DESIGN
              </div>
              <div
                style={{
                  color: "white",
                  textAlign: "start",
                  fontSize: "1rem",
                  margin: "2%",
                }}
              >
                The best graphic design websites to inspire you to create your
                online portfolio Graphic design is a craft where professionals
                create visual content to communicate messages.  it is important to be aware of the
                elements and principles that make up design. Elements are used
                in conjunction or opposition with each other to create visually
                striking and impactful designs.
              </div>
              <Button
                style={{ background: "#3e3e3e", color: "white" }}
                onClick={() => {
                  navigate("/contactus");
                }}
                variant="contained"
              >
                Get started
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} style={{ padding: "5% 5% 5% 5%" }}>
            <div
              style={{
                color: "black",
                marginTop: "6%",
                fontSize: "2rem",
                fontWeight: "500",
              }}
            >
              QUALTY PRINTING
            </div>
            <div
              style={{
                color: "black",
                textAlign: "start",
                fontSize: "1rem",
                margin: "2%",
                fontWeight: "500",
              }}
            >
              Print quality refers to the quality of the hard copy or printout
              produced by a printer. There are many factors that determine the
              level of the quality, but, overall, it has to do with the accuracy
              of the reproduction of the source material, which is influenced by
              the quality and type of paper used and, of course, by the
              specifications of the printer such as the dots per inch (DPI), the
              print-head capability and the type and quality of ink/toner used.
            </div>
            <Button
              style={{ background: "black", color: "white" }}
              onClick={() => {
                navigate("/contactus");
              }}
              variant="contained"
            >
              Get started
            </Button>
          </Grid>
          <Grid item xs={12} md={6} style={{ padding: "5% 5% 5% 5%" }}>
            <div data-aos="flip-left">
              <img src={quality} width="95%" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Service;
