import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOptions from './HeaderOptions'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { useDispatch } from 'react-redux'
import { logout } from './features/userSlice'
import { auth } from './firebase'
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'



function Header() {

  const dispatch = useDispatch();

const logoutOfApp = () => {
  dispatch(logout())
  auth.signOut();
}

  return (
    <div className='header'>
        <div className='header__left'>
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABelBMVEX////7///9///4//////7///z//v3//f/+//v2///+//kAAAD//fr9//zz///7+/v///YAW6X/+v8AW6pYgbL6//kATKLq+//o9/8jYKNnjLo5b6zA2ur4//v//faJrcRHgKra8vzy8vIAVJ98pMoAW7EAVZfIyMgATJYAXq9ck70AUZEpZp4va57e9v/C4/Oampr7//AAUKDR5/anxtoATJkAXaZ/f3+Ojo4uLi7U4+0ARJoAX6qgxeAAWrQxbJ2y0OPh7/7c3NwUFBRtbW26uro8PDxyl797ocna6OuLnqtpiqFklrfS3OSzwMp2mrajrbZtiacARYpSgKAAV40NUYFBdZ6Ko7uvvctogqA8dqkAULGt0+2ivOVUkctUi697rssoeMM8aKqFwOHY//+8x+G04exSd6eTus+MvexhjcdFfbknW4xwreCh0O8+ZqEARacvX4SElLdEbo9AWYdog6tZhsmqts0AQ3gjTnIAN4dRUVEhISFJSUmAIlpbAAAXWElEQVR4nO2ai1/bRrbHNaO3mJHGFkI2sQTyQ8EP7NoG0tAYTPpwSEhowSEtcQq7TRu6YdvN5va2vdv93++ZEa845H62n969vf185vsJxLJG0vnpzJw5ZwZFkUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUh+Z1xkGpRRhALHxAEluoY1hOAH87OUYqSqSKM6oxhTxL8jOkbQAiNMddPEoh2iloGpcX5oWRibpgJXaOIuETax4eHsJNwULtcNBUf0wgza7TJKGWCZmFKqAaI1/x8hihWELhprcAOHOUHAGFwWUNM0kPpOhREhMSP5vEm6ptXlWnRCiMOYsC0IHIsSx7J0Bx7C4jh2iONY8ACOBZLO3oTjEGIp54cxtCREhyYGP2TMNC34AuCHDrN0xuCCIBImmIrCX0g+w+gywt8UxsICTYcXThlY6VzYrDNiOSx/gQdmIeVddJmjKbatUhZhiym2Ci8tBtOYLoyxsE5iS8Ea2GBRFjvU0jRCNIe/boS4Y8QzkYodjBQjO9SogmykQEOhkOoKcl34wjh3KRwi0IwvFWLVRsgG1MDSDONNhXBWxezS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'/>
            <div className='header__search'>
                <SearchIcon/>
                <input type='text' placeholder='Search' />
        </div>
        </div>
        <div className='header__right'>
            <HeaderOptions Icon={HomeIcon} title="Home" />
            <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOptions Icon={ChatIcon} title="Messaging"/>
            <HeaderOptions Icon={NotificationsIcon} title="notifications"/>
            <HeaderOptions avatar={true} title='profile' onClick={logoutOfApp}/>


            </div>
        
    </div>
  )
}

export default Header