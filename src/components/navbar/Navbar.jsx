import './navbar.css';

//Navbar for signed in users
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbarLeft">
          <div className="logo">DealIt</div>
        </div>
        <div className="navbarMiddle">
          <input className="searchInput" placeholder='Search for an account or category' />
        </div>
        <div className="navbarRight">
        </div>
      </div>
    </>
  )
}

export default Navbar