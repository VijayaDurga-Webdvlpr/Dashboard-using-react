import "./Sidebar.css";


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
        <i className="fa fa-calendar-check-o"></i>
          <a href="#">Windy Days of the Week</a>
        </div>
        <div className="sidebar__link">
          
          <a href="#">PM 1.0 particle</a>
        </div>
        <div className="sidebar__link">
          
          <a href="#">PM 2.5 particle</a>
        </div>
        <div className="sidebar__link">
          
          <a href="#">PM 10 particle</a>
        </div>
       
      </div>
    </div>
  );
};

export default Sidebar;
