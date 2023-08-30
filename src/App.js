import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './pages/homepage';
import { SecondPage } from './pages/secondpage';
import { PolynomialMenu } from './curric-pages/polynomial';
function App() {

  return (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/resources" element={<SecondPage/>} />
    <Route path='/polynomial' element={<PolynomialMenu/>}/>
  </Routes>

  );
}

export default App;
