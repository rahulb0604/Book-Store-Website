import React from 'react';
import {Link} from "react-router-dom";
import './Home.css';
const Home = () => {
    const image=require("../images/home-img1.jpeg");
  return (
    <div className="Home-Page bg-dark text-white container-fluid">
        <div className='row container'>
            <div
            className='col-lg-6 d-flex justify-content-center align-items-start flex-column'
            style={{height:"92vh"}}
            >
                <h2 style={{fontSize:"80px"}}>BOOK STORE</h2>
                <h2 style={{fontSize:"50px"}}>FOR YOU</h2>
                <p className='mb-0' style={{color:"silver"}}>Checkout The Books From Here</p>
                <Link to="/books" className='viewBook my-3'>View Books</Link>
            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-end flex-column' style={{height:"92vh"}}>
                <img className='img-fluid homeimg '
                src={image} />
            </div>
        </div>
    </div>
  )
}

export default Home