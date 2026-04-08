// Header component displays app title and navigation links

import { Link } from 'react-router-dom'

// in react you import css directly into the component 
import './Header.css'

// h1 headin with a className so css can target it
// the 'to' prop is like href in a regular <a> tag tells react where to go when clicked
function Header () {
    return (
        <header className="header">
        
        <Link to="/">
        <img
          src="/images/PPlogofront.png"
          alt="Pixel Palette logo"
          className="header-logo"
        />
        </Link>

        <nav className="header-nav">
            <Link to="/">Home</Link>
            <Link to="/canvas">Canvas</Link>
            <Link to="/about">About</Link>
        </nav>
        </header>
    )
}

// makes the component available to import into other files
export default Header