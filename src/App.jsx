 import Header from "./Components/Header";

import Home from "./Pages/Home"
import Earphones from './Pages/Earphones';
import Earbuds from './Pages/Earbuds';
import Speakers from './Pages/Speakers'
import {Routes,Route} from "react-router-dom"
import './App.scss';


function App() {
  return (
    <div className="App">
     <div className="container">
     <Header/>
     <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/earphone" element ={<Earphones/>}/>
      <Route path="/earbuds" element ={<Earbuds/>}/>
      <Route path="/speakers" element ={<Speakers/>}/>
     </Routes>
    
      
     </div>
    </div>
  );
}

export default App;
