import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Detail from "./components/Detail/Detail";


// aca va el axios.default.URL DEL BACK PARA CONECTAR CON EL FRONT EN LAS ACTIONS

export default function App() {
  return (
    
        <BrowserRouter>
        <Route exact path= {"/"} component = {LandingPage} />
        <Route exact path={"/home"} component ={Home} />
        <Route path={"/home/detail/:id"} component={Detail } />
        <Route path={"/create"} component={Form} />
        </BrowserRouter>
  
);
}


