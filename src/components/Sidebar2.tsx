import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar2() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-blue-100" style={{ width: '250px', height: '1200px', borderRight: '2px solid #e0e0e0' }}>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link " aria-current="page" style={{ color: 'black' }}>
                            <svg className="bi pe-none me-2" width="16" height="16">
                                <use xlinkHref="/login"></use>
                            </svg>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/buyData" className="nav-link" style={{ color: 'black' }}>
                            <svg className="bi pe-none me-2" width="16" height="16">
                                <use xlinkHref="#speedometer2"></use>
                            </svg>
                         Profile
                        </Link>
                    </li>
                    <li>
                        
                    </li>
                    <li>
                        <Link to="/reachus" className="nav-link" style={{ color: 'black' }}>
                            <svg className="bi pe-none me-2" width="16" height="16">
                                <use xlinkHref="/help"></use>
                            </svg>
                            Need Help
                        </Link>
                    </li>
                    <Link to="/" className="nav-link" style={{ color: 'black' }}>
                            <svg className="bi pe-none me-2" width="16" height="16">
                                <use xlinkHref="#table"></use>
                            </svg>
                            Learn more
                        </Link>
                    
                </ul>
                <hr />
            </div>
  )
}

export default Sidebar2