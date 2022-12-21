import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home";
import styled from "styled-components";
import Form from "./components/Form/Form";
import Detail from "./components/Detail";
//import NotFound from "./components/NotFound";


export default function App() {
  return (
    <ContentWrapper>
    <BrowserRouter>
      
        <Route exact path= {"/"} component = {LandingPage} />
        <Route exact path={"/home"} component ={Home} />
        <Route path={"/home/detail/:id"} component={Detail } />
        <Route path={"/create"} component={Form} />
        
      
    </BrowserRouter>
  </ContentWrapper>
);
}

const ContentWrapper = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin: auto;
`;
