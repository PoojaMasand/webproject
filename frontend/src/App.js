import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Import custom styles for our application
import './App.css';

import Auth from './services/Auth';
import Navbar from "./components/layout/Navbar";

// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from './components/home/HomePage';
import PostsPage from "./components/posts/PostsPage";
import Postdetails from './components/chat/PostDetails';
import PostsApi from './api/PostsApi';


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
                        render={() => <Postdetails items={information} />}
                                items={information}/>
                       
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
