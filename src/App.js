import AppCss from './App.module.css'
import {Route, Routes} from "react-router-dom"
import Home from './pages/homepage';
// import { SecondPage } from './pages/secondpage';
import { PolynomialMenu } from './curric-pages/polynomial';
import { EquationMenu } from './curric-pages/equation';

function App() {

  return (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/polynomial" element={<PolynomialMenu/>} />
    <Route path='/polynomial' element={<PolynomialMenu/>}/>
    <Route path='/equation' element={<EquationMenu/>}/>
  </Routes>

  );
}

export default App;
