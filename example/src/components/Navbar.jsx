import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = props => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">
                        Home1
                    </Link>
                </li>
                <li>
                    <Link to="/home2">
                        Home2
                    </Link>
                </li>
                <li>
                    <Link to="/home3">
                        Home3
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
