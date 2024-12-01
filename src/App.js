import Navbar from './Components/Navbar';
import Contents from './Components/Contents';
import Contact from './Components/Contact';
import './App.css';
import About from './Components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';


function App() {

  const [myStyle,setMyStyle] =useState({
      color:'black',
      backgroundColor:'#C2FFC7'
  });

 const toggleMode = () =>{
  if(myStyle.color === 'black'){
    setMyStyle({
        color:'white',
        backgroundColor:'black'
    })
     document.body.style.backgroundColor = 'black'
     document.body.style.color = 'white'
  }
  else{
    setMyStyle({
      color:'black',
      backgroundColor:'#C2FFC7'
  })
   document.body.style.backgroundColor = 'white'
   document.body.style.color = 'black'
  }
}

  return (
    <>
    <Router>
        <Navbar  toggleMode={toggleMode} myStyle={myStyle}/>
        <div className='container' >
        <Routes>
          <Route exact path="/" element={ <Contents/>}> 
            </Route>
            <Route exact path="/About"  element={<About />}>
            </Route>
            <Route exact path="/Contact"  element={<Contact />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
