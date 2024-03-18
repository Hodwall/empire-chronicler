import Drawer from './Components/Drawer/Drawer';
import NavBar from './Components/NavBar/NavBar';
import Section from './Components/Section/Section';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Drawer />
      <div className="Content">
        <NavBar />
        <Section />
      </div>
    </div>
  );
};

export default App;