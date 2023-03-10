import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {store}  from "./store";
import { ChakraProvider} from "@chakra-ui/react";


ReactDOM.render(
  
<Provider store={store}>
<ChakraProvider>
  <BrowserRouter>
       <App />
  </BrowserRouter>,
</ChakraProvider>
</Provider>,
  
  document.getElementById('root')
);



//export NODE_OPTIONS=--openssl-legacy-provider
