import React from "react"
import SData from "./SData";
import Cards from "./Cards"

const Services=()=>{
    return(
        <>
        <h1 className="container-fluid text-center">Our Services</h1>
        <div className="container text-center services">
          {SData.map((val,ind)=>{
            return(
              <>
              <Cards key={ind} title={val.title} />
              </>
            )
          })}
        </div>
        </>
    )
}
export default Services;
