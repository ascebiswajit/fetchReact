
import React,{useState,useEffect} from 'react';

import image from '../images/user.jpg'
import axios from 'axios';

import{useParams} from 'react-router';


function Comments(props) {
 
  const {id}=useParams();
console.log(id);
const [post,setPost]=useState([]);
    const[input,setInput]=useState('');
    const name=localStorage.getItem('id');
    
 console.log(name);

  
  useEffect(()=>{
  
    async function fetchData(){
      const response = await axios(`https:jsonplaceholder.typicode.com/posts/${id}/comments/`);
       setPost(response.data);
    
    }
    

      fetchData();
      console.log(post);
  
    },[]);
  
    

    const onLogout = () => {
      localStorage.removeItem('id');
      props.history.push('/');
    }

  return(
    <> 
    

    <div className='d-flex flex-wrap'>
    {post.map((post)=>{
     
      return(
        <>
          <div className='ms-5 mt-5' key={post.id}>
    <div className="card" style={{width: '18rem'}}>
    <img src="{image}" className="card-img-top mb-70 w-25" alt="..." />
    <div className="card-body">
      <h5 className="card-title" >{post.name}</h5>
      <h5 className="card-title mt-4 text-secondary" >{post.email}</h5>
      <p className="card-text text-primary mt-3">{post.body}</p>
      
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

export default Comments;