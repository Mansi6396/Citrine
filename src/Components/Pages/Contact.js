import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import contact from "../../Images/contect.jpg";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { NavLink } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

function Contact() {

  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [mobile,setMobile] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [msg,setMsg]=useState("");

 
  var data = {fname,lname,mobile,email,subject,msg}
  
  const onsubmit = () =>{
    console.log(data);
  }

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <article
            className="contactimg"
            style={{
              backgroundImage: `url(${contact})`,
              width: "100%",
              height: "300px",
            }}
          >
            <h1
              style={{ fontSize: "65px", color: "black", textAlign: "center" }}
              data-aos="fade-down"
            >
              ContactUs
            </h1>
          </article>
        </Grid>
      </Grid>

      <div style={{ margin: "0px 0px 15px 0px" }}>
        <marquee className="marquee" behavior="scroll" direction="left" Scrollamount="10">Give Us a call or drop by anytime,we endeavour to answer all enquiries
        within 24 hours on Buisness Days.</marquee>
        
      </div>
      
      <Grid container>
        <Grid item xs={12} md={8}>
          <div className="leftcontact">
            <div>
              <h1
                style={{
                  color: "white",
                  fontSize: "34px",
                  textAlign: "center",
                }}
              >
                Ready To Get Started?
              </h1>
              <Grid
                style={{ justifyContent: "center" }}
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
              >
                <Grid item xs={2} sm={4} md={5}>
                  <TextField
                    style={{ padding: "10px" }}
                    id="outlined-basic"
                    label="FirstName"
                    variant="outlined"
                    fullWidth
                    value={fname}
                    onChange={(e)=>{setFname(e.target.value)}}
                  />
                </Grid>
                <Grid item xs={2} sm={4} md={5}>
                  <TextField
                    style={{ padding: "10px" }}
                    id="outlined-basic"
                    label="LastName"
                    variant="outlined"
                    fullWidth
                    value={lname}
                    onChange={(e)=>{setLname(e.target.value)}}
                  />
                </Grid>
              </Grid>
              <Grid
                style={{ justifyContent: "center" }}
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
              >
                <Grid item xs={2} sm={4} md={5}>
                  <TextField
                    style={{ padding: "10px" }}
                    id="outlined-basic"
                    label="Your Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                  />
                </Grid>
                <Grid item xs={2} sm={4} md={5}>
                  <TextField
                    style={{ padding: "10px" }}
                    id="outlined-basic"
                    label="Your Mobile No"
                    variant="outlined"
                    fullWidth
                    value={mobile}
                    onChange={(e)=>{setMobile(e.target.value)}}
                  />
                </Grid>
              </Grid>
              <Grid
                style={{ justifyContent: "center" }}
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={4} sm={8} md={10}>
                  <TextField
                    style={{ padding: "10px" }}
                    id="outlined-basic"
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    value={subject}
                    onChange={(e)=>{setSubject(e.target.value)}}
                  />
                </Grid>
              </Grid>
              <Grid
                style={{ justifyContent: "center" }}
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={4} sm={8} md={10}>
                  <TextField
                    style={{ padding: "10px" }}
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                    fullWidth
                    value={msg}
                    onChange={(e)=>{setMsg(e.target.value)}}
                  />
                </Grid>
              </Grid>
            </div>
            <div className="mt-3">
              <NavLink className="mb-3 button" onClick={onsubmit}> Submit </NavLink>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}  style={{ marginTop: "1%" }} className="rightpart">
          <Grid container>
            <Grid item xs={12} md={12}  >
            <h5 >
            <EmailIcon fontSize="large" style={{ color: "blue" }} />
            Our Mailbox
          </h5>
          <div ><a style={{color:"black",textDecoration:"none"}} href="mailto:citrineprintpack@gmail.com">citrineprintpack@gmail.com</a></div>
            </Grid>
            <Grid item xs={12} md={12} >
            <h5 className="phone" > 
            <PhoneInTalkIcon fontSize="large" style={{ color: "blue" }} />
            Our Phone
          </h5>
          <div  ><a style={{color:"black",textDecoration:"none"}} href="tel: +91 88668 77979"> Office: +91 88668 77979</a></div>
          <div  ><a style={{color:"black",textDecoration:"none"}} href="tel: +91 87809 71003"> Sales: +91 87809 71003</a></div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default Contact;
