import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <FavoritesContextProvider><BrowserRouter>
  <App/>
  </BrowserRouter></FavoritesContextProvider>, 
  
  
  document.getElementById('root'));
