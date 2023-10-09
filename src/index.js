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
import { SlopeMenu } from './curric-pages/slope';
import { LineMenu } from './curric-pages/line-equation';
import { SystemsMenu } from './curric-pages/systems';
import { FactorMenu } from './curric-pages/factor';
import { QuadraticMenu } from './curric-pages/quadratics';
import { TrigMenu } from './curric-pages/trig';
import { FunctionMenu } from './curric-pages/functions';
import { RationalMenu } from './curric-pages/rational';
import { TransMenu } from './curric-pages/transformations';
import { ExponentialMenu } from './curric-pages/exponentials';
import { TrigFuncMenu } from './curric-pages/TrigFunc';
import { TrigIdenMenu } from './curric-pages/trigIden';
import { HigherDegreeMenu } from './curric-pages/highdegree';
import { LogMenu } from './curric-pages/log';
import { CalculusMenu } from './curric-pages/calculus';
import { DerivativeMenu } from './curric-pages/deriv';


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

  {
    path: "/slope",
    element: <SlopeMenu/>,
  }, 

  {
    path: "/line-equation",
    element: <LineMenu/>,
  }, 


  {
    path: "/systems",
    element: <SystemsMenu/>,
  }, 

  {
    path: "/factor",
    element: <FactorMenu/>,
  }, 

  {
    path: "/quadratic",
    element: <QuadraticMenu/>
  }, 

  {
    path: "/trig",
    element: <TrigMenu/>
  }, 

  {
    path: "/functions",
    element: <FunctionMenu/>
  }, 

  {
    path: "/rationals",
    element: <RationalMenu/>
  }, 

  {
    path: "/transformations",
    element: <TransMenu/>
  }, 

  {
    path: "/exponential",
    element: <ExponentialMenu/>
  }, 

  {
    path: "/trig-functions",
    element: <TrigFuncMenu/>
  }, 

  {
    path: "/trig-identities",
    element: <TrigIdenMenu/>
  }, 

  {
    path: "/higher-degree",
    element: <HigherDegreeMenu/>
  }, 

  {
    path: "/logs",
    element: <LogMenu/>
  }, 

  {
    path: "/calculus",
    element: <CalculusMenu/>
  }, 

  {
    path: "/derivative",
    element: <DerivativeMenu/>
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
