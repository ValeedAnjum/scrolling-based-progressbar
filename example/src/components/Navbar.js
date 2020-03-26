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
                    <Link to="/Home2">
                        Home2
                    </Link>
                </li>
                <li>
                    <Link to="/Home3">
                        Home3
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
