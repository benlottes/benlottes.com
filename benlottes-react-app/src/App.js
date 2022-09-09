import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Sidebuttons from './my_components/SideButtons.js';
import NavRoutes from './my_components/NavRoutes.js';
import NamePlate from './my_components/NamePlate';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
    <div className="App">
      <NamePlate/>
      <div className="side-buttons">
        <Sidebuttons/>
        <NavRoutes/>
      </div>
    </div>
);

export default App;
