import React from 'react'
import './SideBar.css'
import Avatar from '@material-ui/core/Avatar'
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png'/>
            <Avatar className='sidebar__avatar' src={user.photoUrl}>{user.photoUrl[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>
                     Who viewed you   
                </p>
                <p className='sidebar__statNumber'>2,567</p>
            </div>
            <div className='sidebar__stat'>
            <p>
                     Views on post   
                </p>
                <p className='sidebar__statNumber'>1,873</p>
            </div>
        </div>
        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('Convocation')}
            {recentItem('academics')}
            {recentItem('placements')}
            {recentItem('programming')}
            {recentItem('reactjs')}
            {recentItem('softwarae engineering')}



        </div>

    </div>
  )
}

export default Sidebar