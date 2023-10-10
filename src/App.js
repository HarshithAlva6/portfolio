import Info from './page/info';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Proj from "./page/projects";
import Navi from './page/navi';
import Resume from "./page/resume";
import "./App.css";

function App() {
  return ( 
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      <Navi />
      <Info />
      <Proj />
      <Resume />
    </div>
  );
}

export default App;
