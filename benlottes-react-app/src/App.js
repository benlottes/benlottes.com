import './App.css';
import Sidebuttons from './my_components/SideButtons.js';
import NavRoutes from './my_components/NavRoutes.js';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
    <div className="App">

      <div className="side-buttons">
        <Sidebuttons/>
        <NavRoutes/>
      </div>
    </div>
);

export default App;
