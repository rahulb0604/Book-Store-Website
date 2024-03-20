import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axois from 'axios';

const Updatebook = (props) => {
  const location = useLocation()
  const { bookname } = location.state;
  
  const [Data,setData]=useState({
    bookname:"",
    description:"",
    author:"",
    image:"",
    price:"",
  })
  const change=(e)=>{
    const{name,value}=e.target;
    setData({...Data,[name]:value});
  }
  const submit=async(e)=>{
    e.preventDefault();
    console.log(bookname);
    await axois.put(`http://localhost:5000/api/v1/updateBook/${bookname}`,Data).then((res)=> alert(res.data.message));
    setData({
      bookname:"",
    description:"",
    author:"",
    image:"",
    price:"",
    })
  }

  return (
    <>
     <div className='bg-dark d-flex justify-content-center align-items-center py-3'>
            <h4 className='text-white'>Update Book</h4>
        </div>
    <div className='bg-dark d-flex justif-content-center align-items-center' style={{minHeight:"92vh"}}>  
    <div className='container p-4'><div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-white">Book Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Name" name="bookname" onChange={change} value={Data.bookname}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-white">Description</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Description" name="description" onChange={change} value={Data.description}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-white">Author</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Author Name" name="author" onChange={change} value={Data.author}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-white">Image</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Image Url" name="image" onChange={change} value={Data.image}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-white">Price</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Price" name="price" onChange={change} value={Data.price}/>
</div>
<button className='btn btn-success' onClick={submit}>Submit</button>
</div>
 </div></>
  )
}

export default Updatebook