import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Import custom styles for our application
import './App.css';
import './custom.css';


// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from './components/home/HomePage';
import PostsPage from "./components/posts/PostsPage";
import PostDetails from './components/comment/PostDetails';
import PostsApi from './api/PostsApi';
import Auth from './services/Auth';
import Navbar from "./components/layout/Navbar";


function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);
  
  const [information, setInformation] = useState([]);


  const viewPosts = () => {
      PostsApi.getAllPosts()
          .then(response => {

              setInformation(response.data);
          })}
 
          useEffect(() => {
      viewPosts();

  }, []);

  console.log(information)
  //const data = information.json()
 // const {id} = data;
//console.log({id})
  const loggedInRouter = (

            <Router>
                <Navbar onLogout={() => Auth.logout()} />

                <div className="container mt-5">
                    <Switch>
                        <Route path="/posts">
                            <PostsPage/>
                        </Route>

                        <Route
                            path="/postdetails/:id"
                        render={({match}) => <PostDetails match={match} />}
                                />
                        <Route path="/">
                          <HomePage/>
                        </Route>

                    </Switch>
                </div>
            </Router>
  );

  return (loggedIn ? loggedInRouter : <LoginPage/>);
}

export default App;
