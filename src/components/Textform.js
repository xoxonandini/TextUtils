import React, {useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState('');
  const handleUpClick=()=>{
    console.log("Uppercase was clicked");
    let newtext=text.toUpperCase()
    setText(newtext)
  }
  const handleOnChange=(event)=>{
    console.log("onChange was clicked");
    setText(event.target.value);
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleLoClick=()=>{
    console.log("Lowercase was clicked");
    let newtext=text.toLowerCase()
    setText(newtext)
  }
  const capitalFirstLetter = ()=>{
    let words = text.split(" ")
   let uppercaseword = ' '
    words.forEach(element => {
       uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    });
    setText(uppercaseword)
}
const [copied, setCopied] = useState(false);
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch((err) => console.error("failed to copy the text: " + err));
  }; 

  const handleExtraSpaces = ()=>{
    let words = text.split(' ');
    let joinedWords = '';
    // console.log(words);
    words.forEach((elem)=>{
        if(elem[0] !== undefined){
            joinedWords += elem + " ";
            console.log(joinedWords);
        }
    })
    setText(joinedWords);
}
  
  
  return (
    <div>
        <div className="mb-3" style={{color:props.mode==='light'?'#202f44':'white'}}>
  <label htmlFor="myBox" className="form-label">Enter the text</label>
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'#283854', 
  color: props.mode==='light'?'black':'white' }} 
  onChange={handleOnChange} id="myBox" rows="6"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick} type="submit">UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick} type="submit">LowerCase</button>
<button type="submit" onClick={speak} className="btn btn-primary mx-1 my-2">Speak</button>
<button className="btn btn-primary mx-1" onClick={capitalFirstLetter} type="submit">Aa</button>
<button className="btn btn-primary mx-1" onClick={handleCopyClick}>{copied ? "Copied" : "Copy"}</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces} type="submit">Remove extra space</button>


<div className="container my-2" style={{color:props.mode==='light'?'#202f44':'white'}}>
  <h5>Your text summary</h5>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
</div>

    </div>
  )
}

