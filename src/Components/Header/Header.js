import React, { useState } from "react";
import "./Header.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import {
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Drawercomp from "../DraweComp/Drawercomp";
import logo from "../../Images/citrinelogo.jpeg"
import citrine from "../../Images/printpack.jpeg"
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


export default function Header() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  
  return ( 
    <React.Fragment >
      
     <div style={{ background: "#FF9D5C" }} >
        <Toolbar>
          <img width={50} height={55} style={{borderRadius:"10px",}}  src={logo}/>
          {/* <img  height={55} style={{borderRadius:"10px",}}  src={citrine}/> */}
          <Typography sx={{padding:"15px",fontSize:"2.5rem",color:"black",fontWeight:700}}>Citrine</Typography> 
          {isMatch ? (
            <>
              <Drawercomp />
            </>
          ) : (
            <>
              <Tabs
              sx={{margin:"auto"}}
                textColor="inherit"
                value={value}
                onChange={(e, value) => {
                  setValue(value);
                }}
                indicatorColor="white"
              ></Tabs>
                    
                    <Tab label="Products" sx={{color:"black",fontWeight:"700"}} onClick={()=>{navigate('/product')}}/>
                
                    <Tab label="Service" sx={{color:"black",fontWeight:"700"}}  onClick={()=>{navigate('/service')}} />
                    <Tab label="AboutUS" sx={{color:"black",fontWeight:"700"}}  onClick={()=>{navigate('/aboutus')}}/>
                    <Tab label="ContactUS" sx={{color:"black",fontWeight:"700"}}  onClick={()=>{navigate('/contactus')}} />
                    <img src=""/>
                    {/* <Button style={{ marginLeft: "auto",background:"#3e3e3e",color:"white"}}  variant="outlined">Login</Button> */}
                    {/* <Button style={{marginLeft:"10px",background:"#3e3e3e",color:"white"}} variant="outlined">signup</Button> */}
             
            </>
          )}
        </Toolbar>
      </div> 
     
     
 
    </React.Fragment>
  );
}
