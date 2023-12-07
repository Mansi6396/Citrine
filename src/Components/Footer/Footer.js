import { Grid } from "@mui/material";
import React from "react";
import "./Footer.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { NavLink, useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
  return (
    <div>
      <div className="footer">
        <Grid container>
          <Grid item xs={12} md={3} sm={12}>
            <div style={{ textAlign: "start" }}>
              <h3>Quick Links</h3>

              <div className="home" onClick={()=>{navigate('/')}}>Home</div>
              <div className="aboutus" onClick={()=>{navigate('/aboutus')}}>About Us</div>
              <div className="contactus" onClick={()=>{navigate('/contactus')}}>Contactus</div>
              <div className="service" onClick={()=>{navigate('/service')}}>Services</div>
              <div className="product" onClick={()=>{navigate('/product')}}>Products</div>
            </div>
          </Grid>
          <Grid item xs={12} md={3} sm={12}>
            <div style={{ textAlign: "start" }}>
              <h3 >Our Services</h3>
              <div className="service" onClick={()=>{navigate('/service')}}>Print Services</div>
              <div className="service" onClick={()=>{navigate('/service')}}>Graphic Design</div>
              <div className="service" onClick={()=>{navigate('/service')}}>Quality Printing</div>
            </div>
          </Grid>
          <Grid item xs={12} md={3} sm={12}>
            <div style={{ textAlign: "start" }}>
              <h3>We are Here</h3>
              <h5>Address:</h5>
              <div>
                Raghuvirnagar, B/H Kamnath Mahadev Temple ,<br />
                Dudhrej Road Surendranagar - 363001
              </div>
              <h5>Email:</h5>
              <div ><EmailIcon fontSize="small" style={{ color: "white" }} />
              <a style={{color: "white",textDecoration:"none"}} href="mailto:citrineprintpack@gmail.com">citrineprintpack@gmail.com</a>
              </div>

            </div>
          </Grid>
          <Grid item xs={12} md={3} sm={12}>
            <div style={{ textAlign: "start" }}>
              <h3>Contact with us</h3>

              <h5>Mobile:</h5>
              <div><PhoneInTalkIcon fontSize="small" style={{ color: "white" }} />
              <a style={{color: "white",textDecoration:"none"}} href="tel: +91 88668 77979"> Office: +91 88668 77979</a>
                </div>
                <div><PhoneInTalkIcon fontSize="small" style={{ color: "white" }} />
              <a style={{color: "white",textDecoration:"none"}} href="tel: +91 87809 71003"> Sales: +91 87809 71003</a>
                </div>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* <footer>Copyright © 2021 Citrine Printpack</footer> */}
    </div>
  );
}
