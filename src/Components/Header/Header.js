import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <nav className="bg-light fixed-top">
                
                <div className="links">
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/doctor/dashboard">Dashboard</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;