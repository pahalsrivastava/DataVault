import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    
    navigate('/login'); // Navigate to the LandingPage after login
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder='Enter your Email'
              className='w-80 px-3 py-1 border rounded-md outline-none'
            />
          </div>
          <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder='Enter your password'
              className='w-80 px-3 py-1 border rounded-md outline-none'
            />
          </div>
          <div className='flex justify-between mt-4'>
            <button
              className='bg-green-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'
              onClick={handleLogin}
            >
              Login
            </button>
            <p>Not Registered? <span className='underline text-blue-500 cursor-pointer'>Signup</span></p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;


