import React, { useState } from "react"

const Contact=()=>{
    const[Data,SetData]=useState({
        fullname:"",
        email:"",
        phone:"",
        textarea:""
    })

    const InputEvent=(event)=>{

        const{name,value}=event.target

        SetData((PreValue)=>{
            return{
                ...PreValue,
                [name]:value
            }
        })
        
    }

    const submit=(e)=>{
        e.preventDefault()
        alert(`Hello its me ${Data.fullname}...My email address is ${Data.email} and my contact number is ${Data.phone}...and my message to I-Yush Team is ${Data.textarea}`)
    }

    return(
        <>
        <div className="my-5">
            <h1 className="text-center contact">Contact US</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="email" class="form-control" name="fullname" value={Data.fullname} autoComplete="off" onChange={InputEvent} id="exampleFormControlInput1" placeholder="Full Name"/>
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" name="email" value={Data.email} autoComplete="off" onChange={InputEvent} id="exampleFormControlInput1" placeholder="email@gmail.com"/>
  <label for="exampleFormControlInput1" class="form-label" >Contact Number</label>
  <input type="email" class="form-control" name="phone" value={Data.phone} autoComplete="off" onChange={InputEvent} id="exampleFormControlInput1" placeholder="+977 1234567890"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" name="textarea" value={Data.textarea} autoComplete="off" onChange={InputEvent} id="exampleFormControlTextarea1" rows="3" placeholder="Write Anything" ></textarea>
  <button onClick={submit} type="button" class="btn btn-primary mt-3">Submit</button>
</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;
