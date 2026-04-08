"use client";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="d-flex w-100 align-items-center justify-content-between">
        <span className="navbar-brand m-0">Weather App</span>

        <ul className="navbar-nav d-flex flex-row m-0 gap-3">
          <li className="nav-item active nav-with-sep">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item nav-with-sep">
            <a className="nav-link" href="#">
              Setup
            </a>
          </li>
          <li className="nav-item nav-with-sep">
            <a className="nav-link" href="#">
              Reports
            </a>
          </li>
          <li className="nav-item nav-with-sep">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
        </ul>

        <form className="d-flex gap-2 m-0">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}