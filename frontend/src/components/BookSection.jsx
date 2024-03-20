import React from 'react'
import {Link} from "react-router-dom";
import axois from 'axios';
const BookSection = ({data}) => {
  const sub=async(bookname)=>{
    // e.preventDefault();
    // console.log(bookname);
    await axois.delete(`http://localhost:5000/api/v1/deleteBook/${bookname}`).then((res)=> alert(res.data.message));
  }
  return (
    <div className='d-flex justify-content align-items-center flex-wrap' style={{marginLeft:"50px"}} >
        {data && data.map((item,index)=>
        <div className='m-3' style={{width:"200px",height:"320px",backgroundColor:"white",border:"7px solid white"}}>
        <div><img
        style={{width:"200px",height:"210px"}}
        className='img-fluid' 
        src={item.image} 
        alt="/"
        /></div>
        <h6 style={{fontSize:"15px",width:"200px"}} className='px-2  m-0'>{item.bookname.slice(0,20)}...</h6>
        <h6 style={{fontSize:"16px"}} className='my-2 px-2'>Rs. {item.price}</h6>
        <div className='d-flex justify-content-around align-items-center  my-2'>
        <Link to='/updateBook' state={{bookname:item.bookname}} className='btn btn-primary'>UPDATE</Link>
        <button onClick={(e)=>(e.preventDefault(),sub(item.bookname))} className='btn btn-danger'>DELETE</button>
        </div>
        </div>)}
    </div>
  )
}

export default BookSection