import React from 'react'
import './SideBar.css'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="logo">
                 <img 
                 className="logo_img"
                 src="https://i.pinimg.com/564x/72/a3/d9/72a3d9408d41335f39e9f014dc35cf44.jpg"
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
                    <div>
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
                 <div className="sidebar_link end_bar"> <span /> <a  >Feed</a> </div> 
                 <div className="sidebar_link"> <span /> <a >Explore</a> </div> 
                 <div className="sidebar_link"> <span /> <a >Notification</a> </div> 
                 <div className="sidebar_link"> <span /> <a >Draft</a> </div> 
                 <div className="sidebar_link"> <span /> <a >IG  TV</a> </div> 
                 <div className="sidebar_link"> <span /> <a >Stats</a> </div> 
                 <div className="sidebar_link"> <span /> <a >Settings</a> </div> 


               
           </nav>
           
           <div className="spacer"></div>
<div className="logout">
           <span></span> 
           <a >Logout</a>
           </div>
        </div>
    )
}
