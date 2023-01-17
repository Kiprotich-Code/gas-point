import React from "react";
import './Admin.css'

export default function AdminNav() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Orders</li>
                <button>SignOut</button>
            </ul>
        </nav>
    )
}