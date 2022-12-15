import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage"
import Home from "./components/Home/Home"


function App() {
  return (
    <BrowserRouter>
    <div>
      <Route exact path={"/"} component = {LandingPage}/>
      <Route exact path={"/home"} component = {Home}/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
