import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

// Define a type for the dataset
interface Dataset {
    _id: string;
    title: string;
    description: string;
    price: string;
    
}

const DataList: React.FC = () => {
    const [dataset, setDataset] = useState<Dataset[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get<{ data: Dataset[] }>('http://localhost:5000/user/show')
            .then((response) => {
                setDataset(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching datasets:', error);
            });
    }, []);

    const handleSell = (id: string) => {
      navigate(`/sell/${id}`);
            
    };

    return (
        <div className="grid grid-cols-3 gap-4">
            {dataset.map((item) => (
                <Card
                    key={item._id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    
                    onSell={() => handleSell(item._id)}
                />
            ))}
        </div>
    );
};

export default DataList;

