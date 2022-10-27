import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyle/GlobalStyle';
import { Home } from './pages/Home';
import { Workout } from './pages/Workout';

function App() {
  return (
    <GlobalStyle>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/:title" element={<Workout />}></Route>
        </Routes>
      </Router>
    </GlobalStyle>
  );
}

export default App;
