import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <Link className="navbar-brand" to="/">Ecommerce</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">All</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/electronic">Electronics</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/jewelery">Jewelery</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/mensclothing">Men's Clothing</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/womensclothing">Women's Clothing</Link>
                        </li>
                        
                       
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar