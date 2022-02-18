import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleDownClick = () => {
        setText(text.toLowerCase())
    }
    const [text, setText] = useState('');
  return (
    <>
        <div className='container'>
            <div className="mb-3">
                <h3 htmlFor="myBox" className="form-h3 my-2">{props.heading}</h3>
                <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
        </div> 
        <div className="container my-3">
            <h1>Your Word summary</h1>
            <p>
                {text.split(" ").length} Words and {text.length} characters
            </p>
            <p>
                {(text.split(" ").length * 0.008).toFixed(2)} minutes to read
            </p>
            <h2>
                Preview
            </h2>
            <p>
                {text}
            </p>
        </div>
    </>
  )
}
  