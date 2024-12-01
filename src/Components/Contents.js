import React,{useState} from "react";


export default function Contents() {
   const [text,setText] = useState('');

   const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
   }

   const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
   }

   const handleCtClick = () => {
    let newText = ("");
    setText(newText);
   }

   const handleCpClick = () => {
    var text =document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);
   }

    const handleEsClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

   const handleOnChange = (event) => {
    setText(event.target.value);
   }


    return (
        <>
        <div className="textbox">
            <h1>Try Edizext - Word & Character Counters, Remove extra Spaces :</h1>
            <label htmlFor="box"></label>
            <textarea id="box" rows="17" cols="120"  value={text} onChange={handleOnChange}></textarea> 
        </div>
        <div className="buttonbox">
            <button onClick={handleUpClick} >Convert to Uppercase</button>
            <button onClick={handleLoClick} >Convert to Lowercase</button>
            <button onClick={handleCpClick} >Copy Text</button>
            <button onClick={handleEsClick} >Remove ExtraSpace</button>
            <button onClick={handleCtClick} >Clear Text</button>
        </div>
        <div className="output">
                <h2>Your Text Summary :</h2>
                <p>Words - {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}  and Characters - {text.length}</p>
                <h2>Preview :</h2>
                <p>{text.length > 0 ? text:'Enter Something To Preview'}</p>
        </div>
        </>
    )
}
