import React from "react"
import { Route,Routes,Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./index.css"

const Apps=()=>{
  return(
    <>
    <Navbar/>
    <div className="content">
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/contact" element={<Contact/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/services" element={<Services/>}></Route>
    </Routes>
    <Footer/>
    </div>
    </>
  )
}

export default Apps;
