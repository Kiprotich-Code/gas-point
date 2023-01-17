import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <h3> GAS~POINT </h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/place_order_home">Place an Order</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}