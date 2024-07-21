import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar3 from './Navbar3';
import TypingAnimation from './Typing';
import FileUpload from './FileUpload';

// Define a type for the dataset
interface Dataset {
  _id: string;
  title: string;
  description: string;
  price: string;
  
}

const SellingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [details, setDetails] = useState<Dataset | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/user/dataset/${id}`)
        .then((response) => {
          setDetails(response.data);
        })
        .catch((error) => {
          setError('Data not found');
          console.error('Error fetching data:', error);
        });
    }
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar3 />
      <TypingAnimation text='Upload your Dataset Here' duration={90} className="text-black mt-20" />

      <div className='mt-10 ml-20 mr-20'>
        <div className="relative flex flex-1 border">
          <div className="relative flex-1 p-1 text-black flex items-center">
            <div className="ml-10 max-w-xl mx-auto">
              <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Title: {details.title}</h2>
                  <p>Description: {details.description}</p>
                 
                  <div className="card-actions justify-end">
                    {/* Additional actions can go here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex-1 p-5 border">
            <FileUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingPage;


//dataId is the integer value parsed from the URL parameter id. It is used to identify which data item the user wants to view or interact with.
//item.id is the unique identifier for each data item in your data array. During the search operation, item.id is compared with dataId to find the matching data item

//useParams extracts id from the URL, which is "3" (a string).

//const { id } = useParams<{ id: string }>(); // id is "3" (string)
//dataId is created by converting "3" (string) to 3 (number).


//const dataId = parseInt(id, 10); // dataId is 3 (number)
//<p>ID: {details.id}</p>
      