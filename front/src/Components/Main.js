import React, { Component } from 'react'
import './Main.css'
import { makeStyles} from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/AddAPhoto'
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search'
import Bell from '@material-ui/icons/Notifications'
import Pane from '@material-ui/icons/AirplanemodeActive'
import Stories from './Stories'
const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },

  }));









  function Header () {
    const classes = useStyles()
   
    return(
      <div className="icon_header">
 <Bell style={{fontSize:20 , color:"#fff", marginRight:"1vw"}} />
  <Pane style={{fontSize:20 , color:"#fff", marginRight:"1vw"}} />  
      <Button className={classes.root}> <AddIcon style={{marginRight:"1vw"}} /> Add a photo</Button>
      </div>
    )
  } 

  export default class Main extends Component {
    
    render() {
        return (
            <div className="main">
                <div className="header">
                <div className="search_header">
               <Search style={{color:"#ffffff50",flex:1}}/> 
               
               <input className="header_input" placeholder="Seacrh" />
               
                </div>
                <div className="header_right">
<Header />
</div>

         </div>

         <div className="stories">
            <h2 className="stories_heading">Stories</h2>

            <div id="container" className="stories_imgs">
                <Stories />
                <Stories />
                <Stories />
                <Stories />
                <Stories />
                <Stories />
                <Stories />
                <Stories />
                <Stories />
                <Stories />
                <Stories />
                <Stories />

            </div>
         </div>

         <div className="stories">
         <h2 className="stories_heading">Feed</h2>
              
               <div className="feed">
                  
                       <div className="row">

                             <div className="col">

                             </div>

                             
                             <div className="col">

                             </div>

                             
                             <div className="col">

                             </div>

                             

                       </div>

                </div>

         </div>
            </div>
        )
    }
}
