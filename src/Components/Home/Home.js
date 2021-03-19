import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-image">
            <div className="header">
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Destination</Link>
                        </li>
                        <li>
                            <Link to="/login">Blog</Link>
                        </li>
                        <li>
                            <Link className="btn-book" to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>

                    </ul>
                    
                </nav>

                <div>
                    <div className="title-container">
                        <h1>Faster Riders Team</h1>
                    </div>
                </div >

            </div>
        </div>
    );
};

export default Home;