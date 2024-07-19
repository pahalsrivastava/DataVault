import React from 'react';
import Navbar2 from './Navbar2';

const LandingPage: React.FC = () => {
    return (
        <div>
            {/* Sidebar */}
            <Navbar2 />
            <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: '250px', height: '750px', backgroundColor: 'white', borderRight: '2px solid #e0e0e0' }}>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link " aria-current="page" style={{ color: 'black' }}>
                            <svg className="bi pe-none me-2" width="16" height="16">
                                <use xlinkHref="#home"></use>
                            </svg>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link" style={{ color: 'black' }}>
                            <svg className="bi pe-none me-2" width="16" height="16">
                                <use xlinkHref="#speedometer2"></use>
                            </svg>
                            Transaction
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link" style={{ color: 'black' }}>
                            <svg className="bi pe-none me-2" width="16" height="16">
                                <use xlinkHref="#table"></use>
                            </svg>
                            Wallet
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link" style={{ color: 'black' }}>
                            <svg className="bi pe-none me-2" width="16" height="16">
                                <use xlinkHref="#grid"></use>
                            </svg>
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link" style={{ color: 'black' }}>
                            <svg className="bi pe-none me-2" width="16" height="16">
                                <use xlinkHref="#people-circle"></use>
                            </svg>
                            Settings
                        </a>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    );
};

export default LandingPage;





