import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const [text, setText] = useState('Enter text here');
  return (
    <div>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">{props.heading}</label>
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div> 
  )
}
  