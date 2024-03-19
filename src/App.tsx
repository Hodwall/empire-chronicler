import { useState } from 'react';
import Drawer from './Components/Drawer/Drawer';
import NavBar from './Components/NavBar/NavBar';
import Section from './Components/Section/Section';
import './App.css';

const App = () => {
  const [searchBar, setSearchBar] = useState('');
  const [section, setSection] = useState('weapons');

  return (
    <div className="App">
      <Drawer setSection={setSection} />
      <div className="Content">
        <NavBar setSearchBar={setSearchBar} />
        <Section searchBar={searchBar} section={section} />
      </div>
    </div>
  );
};

export default App;