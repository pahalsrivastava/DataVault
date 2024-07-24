import React from 'react';
import Login from './Login';
import Signup from './Signup';
import { useAuth } from '../context/AuthProvider';

const Navbar: React.FC = () => {
  const openLoginModal = () => {
    const modal = document.getElementById('my_modal_login') as HTMLDialogElement;
    modal.showModal();
  };

  const openSignupModal = () => {
    const modal = document.getElementById('my_modal_signup') as HTMLDialogElement;
    modal.showModal();
  };

  const [authUser,setAuthUser]=useAuth();
  console.log(authUser)
  
  return (
    <div className="navbar bg-black text-white">
      <div className="flex-1">
        <a href='/' className="btn btn-ghost text-xl">DataVault</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href='#section1'>Help</a></li>
          <li><a href='#section3'>About</a></li>
          <li><a onClick={openLoginModal}>Login</a></li>
          
          <li><a onClick={openSignupModal}>Signup</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;