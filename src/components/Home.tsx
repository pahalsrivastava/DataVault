import React from 'react'
import Navbar from './Navbar'

const Home:React.FC =()=> {


  const openLoginModal = () => {
    const modal = document.getElementById('my_modal_login') as HTMLDialogElement;
    modal.showModal();
  };
  return (
    <div>
      
      <div className="mt-4">
          <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded ml-4 hover:bg-blue-600" onClick={openLoginModal} >Buy Data</button>
          <button className="mx-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={openLoginModal}>Sell Data</button>
        </div>
    </div>
  )
}

export default Home