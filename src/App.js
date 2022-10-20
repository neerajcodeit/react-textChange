import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import Form from './Form';


function App() {
  const [mode, setMode] = useState('light')
  const [modeName, setModeName] = useState('Enable dark mode')
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode("dark");
      setModeName("Enable light mode");
      document.body.style.backgroundColor="#0c0430";
      document.body.style.color="#fff";
    }
    else{
      setMode("light");
      setModeName("Enable dark mode");

      document.body.style.backgroundColor="#fff";
      document.body.style.color="#092f5f";

    }
  }
  return (
   <>
  <Navbar title="textChange" mode={mode} toggleMode={toggleMode} modeName={modeName} />
  <div className="container my-3">
    <Form heading="Enter text below to analyize :"  mode={mode} /> 
  </div>
   </>
  );
}

export default App;
