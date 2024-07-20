import React from 'react'
import Navbar2 from './Navbar2'
import Sidebar from './Sidebar'

function BuyData() {
  return (
    <div className="h-screen flex flex-col ">
            
    <Navbar2 />
    
    <div className="flex flex-1">
        <Sidebar />
        
    </div>
</div>
  )
}

export default BuyData
