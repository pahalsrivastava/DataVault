import React from 'react';

import { Navigate,Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';




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
        


      </Routes>
      <Toaster />

    </div>

  );
};

export default App;




