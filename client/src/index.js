import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store  from "./redux/store";


ReactDOM.render(
  
<Provider store={store}>
  <BrowserRouter>
       <App />
  </BrowserRouter>,
</Provider>,
  
  document.getElementById('root')
);



//export NODE_OPTIONS=--openssl-legacy-provider
