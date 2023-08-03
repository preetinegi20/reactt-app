

// import './App.css';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import About from './components/About';
// // import { Link } from 'react-router-dom';
// import React, { useState } from 'react';

// function App() {
//  const [mode, setMod]= useState('light')//by default, the light mode for mode value

//  let toggleMode=()=>{
//   if(mode=='light'){
//     setMod('dark')
//     document.body.style.backgroundColor='rgb(33, 50, 72)'
//   }
//   else{
//     setMod('light')
//     document.body.style.backgroundColor='#fbf8f4'
//   }
//  }
//   return (
//     <>
// <Navbar title="UTIL" value="About" myMode={mode} toggle={toggleMode}/>
// <div className="container my-3">
//     {/* <About/> */}
//     <TextForm myMode={mode}/>
// </div>
//   </>
//   );
// }

// export default App;






import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
 const [mode, setMod]= useState('light')//by default, the light mode for mode value

 let toggleMode=()=>{
  if(mode=='light'){
    setMod('dark')
    document.body.style.backgroundColor='rgb(33, 50, 72)'
  }
  else{
    setMod('light')
    document.body.style.backgroundColor='#fbf8f4'
  }
 }
  return (
    <>
    <Router basename="/REactAppDev">
<Navbar title="UTIL" value="About" myMode={mode} toggle={toggleMode}/>
<div className="container my-3">
  <Switch>
    <Route path="/about">
    <About/>
    </Route>
    <Route>
    <TextForm myMode={mode}/>
    </Route>
  </Switch>
</div>
  </Router>
  </>
  );
}

export default App;

