import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data';
import FileUpload from './FileUpload';
import Navbar3 from './Navbar3';
import TypingAnimation from './Typing';

const SellingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <p>Invalid data ID</p>;
  }

  const dataId = parseInt(id, 10);                                 //This line converts the id (which is a string) into an integer using parseInt,parseInt(id, 10) converts the string id into a base-10 integer,
  const details = data.find(item => item.id === dataId);           //This line uses the find method to search through the data array for an item whose id matches the dataId.|item => item.id === dataId is a callback function used by find to compare each item's id with dataId

  if (!details) {
    return <p>Data not found</p>;
  }

  return (
    <div >
        <Navbar3/>
    <TypingAnimation text='Upload your Dataset Here' duration={90} className="text-black mt-20" />

    <div className='mt-10 ml-20 mr-20'>
        
      

      <div className="relative flex flex-1 border">
      <div className="relative flex-1 p-1 text-black flex items-center ">
      <div className="ml-10 max-w-xl mx-auto">
      <div className="card bg-base-100 w-96 shadow-xl">
    <div className="card-body">
     <h2 className="card-title">Title: {details.title}</h2>
     <p>Description: {details.description}</p>
     <p>Price: {details.price}</p>
    <div className="card-actions justify-end">
 
    </div>
  </div>
</div>
      
      
      </div>
      </div>
      <div className="relative flex-1 p-5  border  "><FileUpload/></div>
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
      