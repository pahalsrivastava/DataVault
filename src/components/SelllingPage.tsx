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
      axios
        .get(`http://localhost:5000/user/dataset/${id}`)
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
    return <p className="text-red-500">{error}</p>;
  }

  if (!details) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white ">
      <Navbar3 />
      <TypingAnimation text="Upload your Dataset Here" duration={90} className="text-White-400 mt-20" />
      <div className="mt-10 ml-20 mr-20 bg-gray-800 p-6 rounded-lg shadow-lg ">
        <div className="relative flex flex-1 border border-gray-700 rounded-lg">
          <div className="relative flex-1 p-6 text-white flex items-center">
            <div className="ml-10 max-w-xl mx-auto">
              <div className="card bg-gray-800 w-96 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-sky-900">
                <div className="card-body">
                  <h2 className="card-title text-white">Title: {details.title}</h2>
                  <p className='text-white'>Description: {details.description}</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex-1 p-6 border border-gray-700 rounded-lg">
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
      