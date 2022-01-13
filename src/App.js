import React, { lazy, Suspense} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Converter from './pages/Converter';
import { ExchangeRates } from './pages/ExchangeRates';
import Box from '@mui/material/Box';
const Navbar = lazy(() => import('./components/Navbar'));

const App = () => {
  return (
    <Box>
       <Suspense fallback={<p>Loading…</p>}>
        <Navbar></Navbar>
      </Suspense>
      <Routes>
        <Route path="/" exact element={<Converter />} />
        <Route path="exchange-rates" exact element={<ExchangeRates />} />
      </Routes>
    </Box>
  );
}

export default App;
