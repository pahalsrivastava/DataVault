import React from 'react'
import data from './logo.jpg'

function Navbar2() {
  return (
    <div className="navbar bg-base-100 text-bg-dark ">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl ">DataVault</a>
    </div>
    <div className="flex-none">
      
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={data} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
          
          
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar2