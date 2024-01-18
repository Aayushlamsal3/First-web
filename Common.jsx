import React from "react"

const Common=(props)=>{
    return(
        <>
        <div className="container col-6 ">
            <div className="container">
            <h1>Welcome to {props.main} Page Guys!</h1>
        <p>We are the Team of Developers making innovative websites from NEPAL.</p>

            </div>
            <div className="container mt-2 ani">
                <img src={props.img} className="rotating-image" alt="" style={{ maxWidth: "100%", height: "auto"  }} />
            </div>
            <button className="btn btn-primary mt-4">Get Started</button>
        </div>
        </>
    )
}
export default Common;
