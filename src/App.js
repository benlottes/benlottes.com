import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Sidebuttons from './my_components/SideButtons.js';
import NavRoutes from './my_components/NavRoutes.js';


const App = () => (
    <div className="App">
      <h1>Ben Lottes</h1>
      <div>
          <Sidebuttons/>
          <NavRoutes/>
      </div>
    </div>
);

export default App;
