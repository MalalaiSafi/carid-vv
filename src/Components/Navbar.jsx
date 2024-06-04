import './Navbar.css'

function Navbar() {
    return (
      <div className='nav'>
        <div className="nav-logo">
          CARID-V
        </div>
        <ul className="nav-menu">
          <li>Home</li>
          <li>Explore</li>
          <li>about</li>
          <li className="nav-contact">Contact</li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  