import { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';
import Section from './Components/Section/Section';
import './App.css';

const App = () => {
  const [searchBar, setSearchBar] = useState('');
  const [section, setSection] = useState('weapons');

  return (
    <div className="App">
      <NavBar setSection={setSection} />
      <SearchBar setSearchBar={setSearchBar} />
      <Section searchBar={searchBar} section={section} />
    </div>
  );
};

export default App;