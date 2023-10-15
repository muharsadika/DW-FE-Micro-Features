import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import MemeGenerator from './Pages/MemeGenerator';
import CurrencyConverter from './Pages/CurrencyConverter';
import TicTacToe from './Pages/TTT';
import WordScramble from './Pages/WordScramb';
// import MemeGeneratorButton from './MemeGenerator/MemeGeneretorButton';
import './index.css';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/meme-generator" element={<MemeGenerator />} />
        <Route path="/currency-converter" element={<CurrencyConverter />} /> {/* Tambahkan rute ke CurrencyConverter */}
        <Route path="/ttt" element={<TicTacToe />} /> {/* Tambahkan rute ke CurrencyConverter */}
        <Route path="/ws" element={<WordScramble />} />
        <Route path="/" element={<App />} />
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
