import './App.css';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
import Alert from './components/Alert';
import Textform from './components/Textform';
// import About from './components/About';

// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
       setAlert(null);
    }, 1500);
  }

  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#202f44';
      showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode('light');
     document.body.style.backgroundColor='white';
     showAlert("Light mode has been enabled","success");
  }
}

  
 return (
  <>
   
{/* //     <BrowserRouter> */}
       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
{/* //</BrowserRouter>         about="About" */}
         

      <Alert alert={alert} />
       <div className="container my-3">
        {/* <Routes>
        <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
        <Routes> */}
        {/* <Route path="/" element={<Textform mode={mode}/>} />
               */}
        {/* </Routes> */}
        <Textform showAlert={showAlert} heading="Enter the etxt to analyze below" mode={mode}/>
      </div>
  {/* //   {/* </BrowserRouter> */}
   </> 
 );
 }

export default App;
