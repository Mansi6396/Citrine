import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  useMediaQuery,
} from "@mui/material";
import "./DrawerComp.css";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import CachedIcon from "@mui/icons-material/Cached";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import logo from "../../Images/citrinelogo.jpeg";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Divider from "@mui/material/Divider";

function Drawercomp() {
  const [opendrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const product = () => {
    navigate("/product");
    setOpenDrawer(false);
  };
  const service = () => {
    navigate("/service");
    setOpenDrawer(false);
  };
  const aboutus = () => {
    navigate("/aboutus");
    setOpenDrawer(false);
  };
  const contactus = () => {
    navigate("/contactus");
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
     
      <SwipeableDrawer anchor="right" open={opendrawer} onClose={() => setOpenDrawer(false)}>
        <div style={{ width: "250px"}}>
          <div
            style={{
              gap: 130,
              display: "flex",
              alignItems: "center",
              padding: "5% 0% 5% 5%",
            }}
          >
            <img
              width={55}
              height={60}
              style={{ borderRadius: "10px" }}
              src={logo}
            />
            <CloseIcon
              fontSize="large"
              style={{ color: "blue" }}
              onClick={() => setOpenDrawer(false)}
            />
          </div>

          <List className="newlist">
            <div>
              <ListItemButton onClick={product}>
                <ListItemIcon className="item">
                  <CachedIcon style={{ color: "blue" }} />
                  <ListItemText style={{ color: "black" }}>
                    Products
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </div>
            <Divider style={{ backgroundColor: "black", height: "0.7px" }} />
            <div>
              <ListItemButton onClick={service}>
                <ListItemIcon
                  style={{ display: "flex", alignItems: "center", gap: 20 }}
                >
                  <SettingsIcon style={{ color: "blue" }} />
                  <ListItemText style={{ color: "black" }}>
                    Services
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </div>

            <Divider style={{ backgroundColor: "black", height: "0.7px" }} />

            <div>
              <ListItemButton onClick={aboutus}>
                <ListItemIcon
                  style={{ display: "flex", alignItems: "center", gap: 20 }}
                >
                  <InfoIcon style={{ color: "blue" }} />
                  <ListItemText style={{ color: "black" }}>
                    AboutUS
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </div>
            <Divider style={{ backgroundColor: "black", height: "0.7px" }} />
            <div>
              <ListItemButton onClick={contactus}>
                <ListItemIcon
                  style={{ display: "flex", alignItems: "center", gap: 20 }}
                >
                  <ContactPageIcon style={{ color: "blue" }} />
                  <ListItemText style={{ color: "black" }}>
                    ContactUS
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </div>
            <Divider style={{ backgroundColor: "black", height: "0.7px" }} />
            {/* <ListItemButton>
             <ListItemIcon>
               <ListItemText>Login</ListItemText>
             </ListItemIcon>
           </ListItemButton>

           <ListItemButton>
             <ListItemIcon>
               <ListItemText>LogOut</ListItemText>
             </ListItemIcon>
           </ListItemButton>  */}
          </List>
        </div>
      </SwipeableDrawer>

      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
     
    </React.Fragment>
  );
}

export default Drawercomp;
