import React from 'react';

import Home from './Home';

import TypingAnimation from './Typing';

import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';

import Footer from './Footer'
import ABout from './ABout';
import Contactus from './Contactus';
import Features from './Features';

import data from './blockchain.gif'

const Homepage: React.FC = () => {
   

  return (
    <div  className='bg-black' >
        
    <div className="flex flex-col min-h-screen ">
     
      <Navbar />
      <Login  />
      <Signup />
     
      <div className="relative flex flex-1">
      
     <div className="relative flex-1 p-1 text-black flex items-center ">
     
          <div className="ml-10 max-w-xl mx-auto"> 
            <TypingAnimation text='Centralized Data Sharing Network' duration={100} className="text-white" />
            <p className="ml-4 text-white">Buy and sell effortlessly with our platform, secured by automated smart contracts for transparent and reliable transactions.<br/> 
            Enjoy convenience and peace of mind with enhanced security and data protection.</p>
            <Home />
          </div>
        </div>
        <div className="relative flex-1 p-5  ">
          <img src={data} alt='dataing' />
          
        </div>
        
      </div>
      
      
    
    
   
    <br />
    <br/>
    <Features/>
    <br/>
    <br/>
    <ABout/>
    <br></br>
    
    <Contactus/>
    <Footer/>
    
   
    
    </div>
    </div>

  );
};

export default Homepage;