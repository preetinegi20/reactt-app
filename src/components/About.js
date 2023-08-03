import React, { useState } from 'react'
export default function About() {
  let [bg, setBg]=useState({
    color:"white",
        backgroundColor:"black"
  })
  
let[btnText, setBtnText]= useState("DEnable Dark Mode")

    let toggleStyle=()=>{
if(bg.color==="black"){
  setBg({color:"white",backgroundColor:"black"})
  setBtnText("Enable Light Mode")
}
else{
  setBg({color:"black",backgroundColor:"white"})
  setBtnText("Enable Dark Mode")
}

    }
  return (
    <>
    <div className='container' style={bg}>
    <h1> ABOUT  US </h1>
   <p className="d-inline-flex gap-1" >
  <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p>
<div className="collapse" id="collapseExample"  style={bg}>
  <div className="card card-body"  style={bg}>
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
<div className='container'>
    <button type='button' className='btn btn-primary' onClick={toggleStyle}>{btnText}</button>
</div>
    </div>
    </>
  )
}
