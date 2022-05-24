import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {

  //pulling the user from the data layer using redux and useSelector(selectors allow us to pull info, selectuser is the selector in userslice)
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  //enabling forced logged in on refreshing browser once user is logged in using useeffect
  useEffect(() => {
    //this listener listens to any authentication changes
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //user is logged in, hence dispatch into redux store using login reducer from userslice amd also dispatch a payload with that login
        dispatch(login({
            //payoad to be dispatched
            email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.displayName,
          //local url(not firebase-> check the letter casing) -> it the props wala photoUrl
          profileUrl: userAuth.photoUrl,
        }))
      }
      else{
        //user logged out -> dispatch logout function from userslice
        dispatch(logout());
      }
    })
  },[])


  return (
    <div className="app">
      <Header/>

      {/* if no user exists render login page , else render the rest of the app having feed sidebar etc */}

      {!user ? (
        <Login/>  
      ) : (
        <div className='app__body'>
        <Sidebar/>
        <Feed />
        <Widgets/>
      </div>
      )}
      
    </div>
  );
}

export default App;
