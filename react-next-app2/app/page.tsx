
import AdminNavbar from "./components/AdminNavbar";
import AdminSidebar from "./components/AdminSidebar";

export default function Home() {
  return (
    <div className="app-wrapper">
      <AdminNavbar />
      <AdminSidebar />

      <main className="app-main">
        <div className="app-content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <h3 className="mb-0">Dashboard</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="app-content">
          <div className="container-fluid">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">AdminLTE Sidebar and Navbar Added</h3>
              </div>
              <div className="card-body">Your AdminLTE sidebar and top navbar are now active in this Next.js page.</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
