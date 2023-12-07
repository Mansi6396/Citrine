import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./Components/Pages/Service";
import About from "./Components/Pages/About";
import Products from "./Components/Pages/Products";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { ScrollToTop } from "react-simple-scroll-up";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        <ScrollToTop
        bgColor="coral"
        strokeFillColor="black"
        symbol={<ArrowUpwardIcon style={{ color: "black" }} />}
        symbolColor="white"
      />
        <Footer/>
        
      </div>
    </>
  );
}

export default App;
