import React from 'react';
import Navbar2 from './Navbar2';
import Sidebar from './Sidebar';
import DataList from './Datalist';

const LandingPage: React.FC = () => {
    return (
        <div className="h-screen flex flex-col bg-gray-200 h-screen ">
            
            <Navbar2 />
            
            <div className="flex flex-1 bg-gray-200">
                <Sidebar />
                <DataList />
            </div>
        </div>
    );
};

export default LandingPage;