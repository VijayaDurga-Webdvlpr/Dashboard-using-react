import "./Navbar.css";


function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
<html><button onclick="myFunction()">Toggle dark mode</button></html>
const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <a className="dark-mode" href="#">Dark Mode</a>
        <a  href="#">Light Mode</a>
        <a className="active_link" href="#">
          Time-Series
        </a>
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;
