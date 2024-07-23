import React, { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const modalRef = useRef<HTMLDialogElement>(null);

  const openLoginModal = () => {
    const modal = document.getElementById('my_modal_signup') as HTMLDialogElement;
    modal.showModal();
  };
  

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault(); 

    const userInfo = {
      email,
      password,
    };

    try {
      const res = await axios.post("http://localhost:5000/user/login", userInfo); 
      console.log(res.data);
      if (res.data) {
        toast.success("Login successfully");
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user)); // Store user data in localStorage

      // Navigate to the landing page after login
      navigate('/login');
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      } else {
        console.error(err);
        toast.error("An unexpected error occurred");
      }
    }
  };
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };
  

  return (
    <div>
      <dialog id="my_modal_login" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form onSubmit={handleLogin}>
          
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
            <h3 className="font-bold text-lg">Login</h3>
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your Email'
                className='w-80 px-3 py-1 border rounded-md outline-none'
              />
            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
                className='w-80 px-3 py-1 border rounded-md outline-none'
              />
            </div>
            <div className='flex justify-between mt-4'>
              <button
                type="submit"
                className='bg-green-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'
              >
                Login
              </button>
              <p>Not Registered? <span className='underline text-blue-500 cursor-pointer' onClick={openLoginModal}>Signup</span></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;