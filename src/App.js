import Info from './page/info';
import Projects from './page/projects';
import './App.css';

function App() {
  return ( 
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <Info />
        <Projects />
    </div>
  );
}

export default App;
