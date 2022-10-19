
import './App.css';
// import About from './Components/About';
import Navbar from'./Components/Navbar';
import TextForm from'./Components/TextForm';
import React, {useState} from 'react';

function App() {

  const[mode,setMode] = useState("light");
  const toggleMode= ()=>{
    if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
   <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <TextForm heading="Enter The Text To Analyze" mode={mode}/>
    {/* <About/> */}
    
   </>
  );
}

export default App;
