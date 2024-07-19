import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import LandingPage from './components/LandingPage';
import Login from './components/Login';




const App: React.FC = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LandingPage/>}/>
        <Route path='/signup' element={<LandingPage/>}/>
        <Route path='/buy' element={<Login/>}/>
        


      </Routes>

    </div>

  );
};

export default App;




