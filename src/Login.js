import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");
  const [profilepic,setProfilepic] = useState("");
  const dispatch = useDispatch();


  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.displayName,
          profileUrl: userAuth.photoUrl,
      }))
    }).catch((error) => alert(error));

  };

  const register = () => {
    if(!name){
      return alert("please enter your full name")
    }

    //firebase functions
    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      //userAuth is successfull-> udate user profile with its name and pic 
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilepic,
      })
      .then(() => {
        //login successful -> dispatch the login into the redux store now using the login reducer
        dispatch(login({
          //payload to be dispatched
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          //local url(not firebase-> check the letter casing) -> it the props wala photoUrl
          photoUrl: profilepic,
        }))
      })
    }).catch((error) => alert(error))};

  return (
    <div className='login'>
      <img src='https://play-lh.googleusercontent.com/KgGlQvQCEbuAsjilkDellYDWErcjol7lM8g37idXznqsIics__v1OiqZOdvjqt7pPWS2'/>
    <form>
      <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Full Name (required if not registered)' />
      <input value={profilepic} onChange={e => setProfilepic(e.target.value)}  type='text' placeholder='Profile pic URL (optional)' />
      <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' required/>
      <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' required />
      <button type='submit' onClick={loginToApp}>Sign In</button>
    </form>
    <p>Not a member?{" "}<span className='login__register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login