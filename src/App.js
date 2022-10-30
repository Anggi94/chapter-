import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Homepage from './pages/Homepage';
import CariMobil from './pages/CariMobil';
import Detail from './pages/Detail';
import Result from './pages/Result';
import Footer from './components/footer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/CariMobil" element={<CariMobil />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Detail/:CarsId" element={<Detail />} />
      </Routes>
      <Footer /> 
      
    </div>
  );
}

export default App;


