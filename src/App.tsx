import React from 'react';

import { Navigate,Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import Contactus from './components/Contactus'

import SelllingPage from './components/SelllingPage';
import BuyData from './components/BuyData';



const App: React.FC = () => {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser)

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={authUser?<LandingPage/>:<Navigate to="/signup"/>}/>
        <Route path='/signup' element={<LandingPage/>}/>
        <Route path='/buy' element={<Login/>}/>
        <Route path='/sell/:id' element={<SelllingPage/>}/>
        <Route path='/help' element={<Contactus/>}/>
        <Route path='/buyData' element={<BuyData/>}/>
        


      </Routes>
      <Toaster />
    
    </div>

  );
};

export default App;




