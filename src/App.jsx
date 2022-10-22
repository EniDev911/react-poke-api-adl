import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation';
import PokemonsProvider from './PokemonsProvider';
// pages
import Home from './pages/Home'
import Pokemones from './pages/Pokemons'
import Pokemon from './pages/Pokemon'

function App() {
  return (
    <div className="App">
      <PokemonsProvider>
        <BrowserRouter basename='react-poke-api-adl'>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
          </Routes>
        </BrowserRouter>
      </PokemonsProvider>

    </div>
  )
}

export default App
