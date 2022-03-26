import React from 'react';

import Users from './component/Users';
import {Switch,Route,Router} from 'react-router-dom';
import posts from './component/posts';
import comments from './component/comments';
import Login from './component/Login';


const PrivateRoute = (props) => {
  
  const token = localStorage.getItem('id');
  console.log(token);
  console.log(props);
  console.log(props.computedMatch.url)
  // let id=token;
  if (token) {
      return  <Route exact path={props.path} component={props.component} ></Route>
  } else {
      return  <Login/> 
  }
}

function App() {


  return (
<>
<Switch> 
        <Route exact path="/" component={Users } />

        <Route exact path="/login/:id" component={Login}/> 
      



       
        <PrivateRoute path="/dashboard/:id" component={posts} />
        <PrivateRoute path="/dashboard/" component={posts} />
       
         <PrivateRoute path="/posts/:id/comments" component={comments} /> 
         
       </Switch> 
      
</>
      
  );
}

  
  

export default App;

 