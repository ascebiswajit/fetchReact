
import React,{useState,useEffect} from 'react';

import image from '../images/user.jpg'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import{useParams} from 'react-router';


function Posts(props) {
 
  const {id}=useParams();
console.log(id);
const [post,setPost]=useState([]);
    const[input,setInput]=useState('');
    const name=localStorage.getItem('id');

  
  useEffect(()=>{
    if(name==id){
    async function fetchData(){
      const response = await axios.get(`https:jsonplaceholder.typicode.com/users/${name}/posts/`);
       setPost(response.data);
    
    }
    

      fetchData();
      console.log(post);
  }else{
    props.history.push(`/login/${id}`);
  }
    },[]);
    
  

   
    // console.log(post.filter(values=>values.name.includes("s")));
    

    const onLogout = () => {
      localStorage.removeItem('id');
      props.history.push('/');
    }

  return(
    <> 
    
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <button onClick={onLogout} type="button" className="btn btn-dark">Logout</button>
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
       <div className="card" style={{width: '18rem'}}>
        <img src={image} className="card-img-top mb-70 w-25" alt="..." />
        <div className="card-body">
        <h5 className="card-title" >user-id{name}</h5>
        <p className="card-text text-primary"></p>
        
        </div>
      </div> 
    <div className='d-flex flex-wrap'>
    {post.filter((post)=>post.title.toLowerCase().includes(input))
    .map((post)=>{
     
      return(
        <>
        <div className='ms-5 mt-5' key={post.id}>
         <div className="card" style={{width: '18rem'}}>
         <img src={image} className="card-img-top mb-70 w-25" alt="..." />
         <div className="card-body">
           <h5 className="card-title" >{post.title}</h5>
           <p className="card-text text-primary">{post.body}</p>
           <NavLink to={`/posts/${post.id}/comments`} className="btn btn-primary">Render To...</NavLink>
           <NavLink to="" id="delete-post" className="btn btn-light ms-2">Delete</NavLink>
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

export default Posts;