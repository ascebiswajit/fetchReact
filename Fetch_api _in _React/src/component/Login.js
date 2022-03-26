

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

import image from '../images/user.jpg';


const Login = (props) => {


  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState("");






  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const response = await axios.get(`https:jsonplaceholder.typicode.com/users/${id}`);

      setUser(response.data);

      setLoading(false);
      console.log(loading);
      console.log(props);

      console.log(response.data.name);
      localStorage.setItem("id", response.data.id);
      console.log(response.data.email);


    }




    getUser();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="ms-5 mt-5">
          <div className="card" style={{ width: '18rem' }}>
            <Skeleton height={230} />
          </div>
        </div>
        <div className="ms-5 mt-5">
          <div className="card" style={{ width: '18rem' }}>
            <Skeleton height={230} />
          </div>
        </div>
        <div className="ms-5 mt-5">
          <div className="card" style={{ width: '18rem' }}>
            <Skeleton height={230} />
          </div>
        </div>

      </>
    );
  };

  const ShowUsers = () => {

    function eventHandler() {

      console.log(password);
      let Password = `${user.email}`;
      let user_id = `${user.id}`;
      const name = localStorage.getItem('id');



      if (Password === password) {
        if (name == user_id) {

          props.history.push(`/dashboard/${name}`);
        }



      } else {
        alert("go back");
        History.push(`/`)

      }



    }
    return (
      <>

        <div className="card" style={{ width: '28rem' }}>
          <img src={image} className="card-img-top mb-70 w-25" alt="..." />
          <div className="card-body">
            <h5 className="card-title" >user-id:{id}</h5>



            <form className="row g-3">
              <div className="col-auto">
                <h5 className="text-primary" >{user.email}</h5>
              </div>
              <div className="col-auto">
                <label htmlFor="inputPassword2">Password</label>
                <input type="password" className="form-control" id="inputPassword2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

              </div>
              <div className="col-auto">
                <button className="btn btn-primary" onClick={eventHandler}>confirm identity</button>
              </div>
            </form>




          </div>
        </div>







      </>
    );




  };





  return (
    <div>
      <div className="container my-2 py-2">
        <div className="row">

          <h3 className='display-6 fw-bolder text-center'>
            Login...
          </h3>
          <hr />

        </div>
        <div className='row justify-content-center'>
          {loading ? <Loading /> : <ShowUsers />}

        </div>
      </div>
    </div>

  )
}
export default Login;





































































