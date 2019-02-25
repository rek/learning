import React from 'react'
import './links.css'

import {
    Link,
  } from "react-router-dom";

export default () => {
    return (
        <ul>
            <li>
               <Link to="/01">1 - Controlled</Link>
            </li>
            <li>
                <Link to="/02">2 - State Management</Link>
            </li>
            <li>
               <Link to="/03">3 - Hooks</Link>
            </li>
            <li>
                <Link to="/04">4 - Example usage</Link>
            </li>
        </ul>
    )
}
