import React from 'react'
import Card from './Card'
import { DataItem } from './data'
import data from './data'
import { useNavigate } from 'react-router-dom';



const DataList: React.FC = () => {
    const navigate = useNavigate();
    const handleSell = (id: number) => {
      console.log(`Sell button clicked for data ID: ${id}`);
      navigate(`/sell/${id}`);
      
    };
  
    return (
      <div className=" grid grid-cols-3 gap-4">
        {data.map((item: DataItem) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            
            onSell={() => handleSell(item.id)}
          />
        ))}
      </div>
    );
  };
  
  export default DataList;