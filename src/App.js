import './App.css';
import CharactersList from './pages/CharacteresList';
import Character from './pages/Charcter';
import {Route, Routes  } from 'react-router'
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
        <Routes >
          <Route strict exact path="/" element={<CharactersList />} />
          <Route strict exact path="/search" element={<Search />} />
          <Route strict exact path="/:id" element={<Character />} />
        </Routes>
    </div>
  );
}

export default App;
