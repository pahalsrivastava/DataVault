import React from 'react';
import Navbar2 from './Navbar2';
import Sidebar2 from './Sidebar2';
import Card2 from './Card2';
import data, { DataItem } from './data'; // Import DataItem type from data.tsx
import { useNavigate } from 'react-router-dom';

const BuyData: React.FC = () => {
  const navigate = useNavigate();

  const handleBuy = (id: number) => {
    console.log(`buy button clicked for data ID: ${id}`)
    navigate(`/buying/${id}`);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-200">
      <Navbar2 />
      <div className="flex flex-1 bg-gray-200">
        <Sidebar2 />
        <div className="flex-1 p-4 ">
          <h1 className="text-4xl text-black text-center font-semibold mb-4">Available Datasets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {data.map((item: DataItem) => (
              <Card2
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                onBuy={() => handleBuy(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyData;


