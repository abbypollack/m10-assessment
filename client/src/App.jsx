import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Landing from "./components/Landing";
import NotFound from "./components/NotFound";
import Nav from "./Nav";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CharacterCards from './components/CharacterCards';

function App() {

  return (
    <Router>
      <Nav/>
     
        <Routes>
          <Route path={'/'} element={<Landing/>}></Route>
          <Route path={'/characters'} element={<CharacterCards/>}></Route>
          <Route path={'/*'} element={<NotFound/>}></Route>
        </Routes>
    
    </Router>

  );
}

export default App
