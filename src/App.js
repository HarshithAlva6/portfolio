import Info from './page/info';
//import { Link } from 'react-router-dom';
import Proj from "./page/projects";
import Navi from './page/navi';
import Resume from "./page/resume";
import Footer from "./page/footer";
import "./App.css";

function App() {
  return ( 
    <div className="App">
      <Navi />
      <Info />
      <Proj />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
