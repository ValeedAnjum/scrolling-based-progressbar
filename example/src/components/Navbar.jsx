import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home1</Link>
        </li>
        <li>
          <Link to="/home2">Home2</Link>
        </li>
        <li>
          <Link to="/home3">Home3</Link>
        </li>
      </ul>
    </div>
  )
}
