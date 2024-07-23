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
import Help from  './components/Help'
import BuyingPage from './components/BuyingPage';



const App: React.FC = () => {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser)

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={authUser?<LandingPage/>:<Navigate to="/"/>}/>
        <Route path='/signup' element={<LandingPage/>}/>
        <Route path='/buy' element={<Login/>}/>
        <Route path='/sell/:id' element={<SelllingPage/>}/>
        <Route path='/help' element={<Contactus/>}/>
        <Route path='/buyData' element={<BuyData/>}/>
        <Route path='/reachus' element={<Help/>}/>
        <Route path='/buying/:id' element={<BuyingPage/>}/>


      </Routes>
      <Toaster />
    
    </div>

  );
};

export default App;




