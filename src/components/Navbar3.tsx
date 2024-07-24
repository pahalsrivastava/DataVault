import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar3: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-gray-900 text-white ">
      <div className="flex-1">
        <a href='/login' className="btn btn-ghost text-xl">DataVault</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button onClick={() => navigate('/help')} className="btn btn-ghost">Help</button>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar3;