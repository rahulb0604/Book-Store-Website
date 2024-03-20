import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div style={{ borderBottom:"1px solid white"}}>
        <nav className="navbar navbar-expand-lg  bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white " href="#">BookStore</a>
    <button className="navbar-toggler bg-white border-2 border-black" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2  mb-lg-0">
        <Link className="nav-item nav-link text-white" to="/">
         Home
        </Link>
        <Link className="nav-item nav-link text-white" to="/books">
         Books
        </Link>
        <Link className="nav-item nav-link text-white" to="/addbooks">
         AddBooks
        </Link>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar