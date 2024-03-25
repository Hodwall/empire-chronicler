import { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';
import Section from './Components/Section/Section';
import './App.css';

const App = () => {
  const [searchBar, setSearchBar] = useState('');
  const [section, setSection] = useState<string | null>(null);

  return (
    <div className="App">
      <NavBar setSection={setSection} />
      <div className="separator"></div>
      <SearchBar setSearchBar={setSearchBar} section={section} setSection={setSection} />
      <Section searchBar={searchBar} section={section} />
    </div>
  );
};

export default App;