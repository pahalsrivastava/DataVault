import React from 'react';
import Navbar2 from './Navbar2';
import Sidebar from './Sidebar';
import DataList from './Datalist';

const LandingPage: React.FC = () => {
    return (
        <div className="h-screen flex flex-col ">
            
            <Navbar2 />
            
            <div className="flex flex-1">
                <Sidebar />
                <DataList />
            </div>
        </div>
    );
};

export default LandingPage;






