import { useState } from 'react';
import Drawer from './Components/Drawer/Drawer';
import NavBar from './Components/NavBar/NavBar';
import Section from './Components/Section/Section';
import './App.css';

const App = () => {
  const [searchBar, setSearchBar] = useState('');

  return (
    <div className="App">
      <Drawer />
      <div className="Content">
        <NavBar setSearchBar={setSearchBar} />
        <Section searchBar={searchBar} />
      </div>
    </div>
  );
};

export default App;