import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/homepage';
import reportWebVitals from './reportWebVitals';
// import { SecondPage } from './pages/secondpage';
import { PolynomialMenu } from './curric-pages/polynomial';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { EquationMenu } from './curric-pages/equation';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, 

  {
    path: "/homepage",
    element: <Home/>,
  }, 

  {
    path: "/polynomial",
    element: <PolynomialMenu/>,
  }, 

  {
    path: "/equation",
    element: <EquationMenu/>,
  }, 

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
