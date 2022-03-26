
import React,{useState,useEffect} from 'react';

import image from '../images/user.jpg'
import axios from 'axios';
import { NavLink } from 'react-router-dom';


function Users(props) {
 
  
    const [data,setData]=useState([])
    const[input,setInput]=useState('');



  useEffect(()=>{
    async function fetchData(){
       const response= await axios.get("https://jsonplaceholder.typicode.com/users")
       setData(response.data);
     
    }
    fetchData();
    console.log(data);
  },[]);


   
    console.log(data.filter(values=>values.name.includes("l")));
    

    

  return(
    <> 
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon" />
           </button>
           <NavLink className="navbar-brand" to="/">User</NavLink>
           <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                 <NavLink className="nav-link active" aria-current="page" to="/login/:id"> Posts</NavLink>
               </li>
               <li className="nav-item">
                 <NavLink className="nav-link" to="/comments">Comments</NavLink>
               </li>
               
             </ul>
             <form className="d-flex">
               <input onChange={e=>setInput(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
             
             </form>
           </div>
         </div>
       </nav>
    <div className='d-flex flex-wrap'>
    {data.filter((values)=>values.name.toLowerCase().includes(input))
    .map((values)=>{
     
      return(
        <>
        <div className='ms-5 mt-5' key={values.id}>
        <div className="card" style={{width: '18rem'}}>
        <img src={image} className="card-img-top mb-70 w-25" alt="..." />
        <div className="card-body">
          <h5 className="card-title" >{values.name}</h5>
          <p className="card-text text-primary">{values.email}</p>
          <NavLink to={`/login/${values.id}`}  className="btn btn-primary">Render To...</NavLink>
          <NavLink to="#" id="delete-post" className="btn btn-light ms-2">Delete</NavLink>
      
        </div>
      </div>
      </div>
        </>
      )
    })}
    


      </div>

    </>
  )

  
} 

export default Users;