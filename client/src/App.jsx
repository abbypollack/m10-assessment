import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Landing from "./Landing";
import NotFound from "./NotFound";
import Nav from "./Nav";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Router>
      <Nav/>
     
        <Routes>
          <Route path={'/'} element={<Landing/>}></Route>
          <Route path={'/*'} element={<NotFound></NotFound>}></Route>
        </Routes>
    
    </Router>

  );
}

export default App
