export default function AdminSidebar() {
  return (
    <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
      <div className="sidebar-brand">
        <a href="#" className="brand-link">
          <span className="brand-text fw-light">AdminLTE Panel</span>
        </a>
      </div>

      <div className="sidebar-wrapper">
        <nav className="mt-2">
          <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                <p>Dashboard</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <p>Users</p>
              </a>
            </li>
            <li className="nav-item menu-open">
              <a href="#" className="nav-link">
                <p>
                  Reports
                  <i className="nav-arrow bi bi-chevron-right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <p>Monthly</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <p>Annual</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <p>Settings</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
