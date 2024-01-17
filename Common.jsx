import React from "react"

const Common=(props)=>{
    return(
        <>
        <section id="header" className="">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex-column">
                                <h1>Grow your Bussiness with <strong className="aayush">Aayush {props.btn}</strong></h1>
                                <h4 className="my-3">
                                    We are the Team of Talented developer making Websites
                                </h4>
                                <div className="mt-3">
                                <button type="button" class="btn btn-primary btn-lg">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        </>
    )
}

export default Common;
