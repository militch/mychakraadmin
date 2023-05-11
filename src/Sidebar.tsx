import './Sidebar.css';

function SidebarBrand() {
  return (
    <a className='sidebar-brand' href='/'>
      <span className='sidebar-title'>
        MyAdmin
      </span>
    </a>
  );
}

function SidebarNav(){
  return (
    <ul>
      
    </ul>
  );
}

function Sidebar(){
  return (
    <div className='sidebar'>
      <SidebarBrand />
      <SidebarNav />
    </div>
  );
}

export default Sidebar;
