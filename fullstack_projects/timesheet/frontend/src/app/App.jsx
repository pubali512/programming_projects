import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


import NavBar  from '../components/NavBar';
import AppRouter from './Router';  

function App() {
  return (
    <div>
      <BrowserRouter>
      <h1>Timesheet App</h1>
      <NavBar />
      <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App
