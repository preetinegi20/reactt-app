
import React, {useState} from 'react'
export default function TextForm(props) {
    let handleOnClick=()=>{
setText("You have clicked")
let newText= text.toUpperCase();
setText(newText)
    }

    let handleOnChange=(e)=>{
        setText(e.target.value)
    }
    let handleOnClear=()=>{
      let clearText= "";
      setText(clearText)
    }
    const [text, setText] = useState("")//deafult value of text
    // text="new text"//wrong way to change the state
    // setText=("new Text")
  return (
  <div className="mb-3 container" style={{color: props.myMode==='dark'?'white':'rgb(33, 50, 72)'}} >
    <h2>{props.heading}</h2>
    <textarea className='form-control' id='myBox' rows="10" value={text} onChange={handleOnChange} style={{backgroundColor: props.myMode==='dark'?'grey':'white',color: props.myMode==='dark'?'white':'rgb(33, 50, 72)',marginBottom:"1rem"}}></textarea>
    <div className="container mb-3">
  <button type="submit" className="btn btn-primary" onClick={handleOnClick}>Convert into upper case</button>
  <button type="submit" className=" mx-2 btn btn-primary" onClick={handleOnClear}>Clear text</button>
  </div>
  <p> {text.split(" ").filter(e=>e.length!=0).length} words and {text.length} character</p>
  <h3>time takes</h3>
  <p> {0.008 * text.split(" ").filter(e=>e.length!=0).length }</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter text to Preview" }</p>
  </div>
  )
}
