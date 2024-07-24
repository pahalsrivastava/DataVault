import React from 'react';

interface CardProps {
  title: string;
  description: string;
  price: string;
  
  onSell: () => void;
  
}

const Card: React.FC<CardProps> = ({ title, description, price,  onSell }) => {
  return (
    <div className="card bg-gray-700 text-primary-content w-75 mt-10 ml-10 mb-5 h-auto">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        
  
        <div className="card-actions justify-end">
          <button className="btn bg-green-400 hover:bg-green-600" onClick={onSell}>Sell for {price}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;