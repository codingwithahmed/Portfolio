import React from 'react'
import './SideBar.css'
import Box from '@material-ui/icons/RssFeed'
import Search from '@material-ui/icons/Search'
import Bell from '@material-ui/icons/Notifications'
import Pane from '@material-ui/icons/AirplanemodeActive'
import Tv from '@material-ui/icons/Tv'
import Settings from '@material-ui/icons/Settings'
import Logout from '@material-ui/icons/Dock'
import Stats from '@material-ui/icons/MultilineChart'
import Arrow from '@material-ui/icons/ArrowLeft' 

export default function SideBar(props) {
    const {click } = props
    const handleClick = () =>{
     if (click = true) {
        
     }
    } 
    return (
        <div className="sidebar">
            <div className="logo">
                 <img 
                 className="logo_img"
                 src="https://www.flaticon.com/svg/static/icons/svg/733/733558.svg"
                 alt="Logo"
                 />
                 <h1 className="logo_text" >
                   Instagram
                 </h1>
            </div>

            <div className="user">
                <div className="avatar_border">
                <img
                className="avatar"
                src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg"
                 />
                </div>
                <div className="name_user">
                <h3 className="username">
                username
                </h3>
                <h5 className="ausername">
                    @usersdadasname
                </h5>
                </div>

                <div className="info">
                    <div >
                  <h1 className="info_upper">260</h1> 
                  <h3 className="info_lower">posts</h3>
                  </div> <div className="ver_spacer"></div>
                  <div>
                  <h1 className="info_upper">50k</h1>
                  <h3 className="info_lower">follower</h3>
                  </div>
                  <div className="ver_spacer"></div>
                  <div><h1 className="info_upper">150k</h1>
                  <h3 className="info_lower">likes</h3>
                  </div>
                </div>
            </div>

           <nav className="menu"> 
                 <div className="sidebar_link "> <Box style={{fontSize:20 , color:"#Fcac46", marginRight:"1vw"}} /> <a  >Feed</a> </div> 
                 <div className="sidebar_link"> < Search style={{fontSize:20 , color:"#fff", marginRight:"1vw"}}/> <a >Explore</a> </div> 
                 <div className="sidebar_link"> <Bell style={{fontSize:20 , color:"#fff", marginRight:"1vw"}} /> <a >Notification</a> </div> 
                 <div className="sidebar_link"> <Pane style={{fontSize:20 , color:"#fff", marginRight:"1vw"}} /> <a >Direct</a> </div> 
                 <div className="sidebar_link"> <Tv style={{fontSize:20 , color:"#fff", marginRight:"1vw"}} /> <a >IG  TV</a> </div> 
                 <div className="sidebar_link"> <Stats style={{fontSize:20 , color:"#fff", marginRight:"1vw"}} /> <a >Stats</a> </div> 
                 <div className="sidebar_link"> <Settings style={{fontSize:20 , color:"#fff", marginRight:"1vw"}} /> <a >Settings</a> </div> 

               
           </nav>
           <div className="button_logout">
           <div className="spacer"></div>  
           <Arrow className="sidebar_button" />
           </div>
<div className="logout">
<Logout style={{fontSize:20 , color:"#fff", marginRight:"1vw"}} />
           <a >Logout</a>
           </div>

        </div>
    )
}
