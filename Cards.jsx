import React from "react"
import {NavLink} from "react-router-dom"
import web from "./Images/web.jpg"

const Cards=(props)=>{
  return(
    <>

<div className="container mt-4">
<div className="card m-auto">
  <img src={web} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink href="/" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
</div>
    </>
  )
}

export default Cards;
