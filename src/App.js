import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './pages/homepage';
import { SecondPage } from './pages/secondpage';
function App() {

  return (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/resources" element={<SecondPage/>} />
  </Routes>

  );
}

export default App;
