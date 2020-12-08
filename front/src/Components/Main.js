import React, { Component } from 'react'
import './Main.css'
import {ThemeProvider , makeStyles} from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/AddAPhoto'
const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.background,
      border: 0,
      fontSize: 16,
      borderRadius: 5,
      boxShadow: theme.boxShadow,
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    bt:{
        background: theme.background,
        border: 0,
        fontSize: 16,
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
  }));

  function Button () {
    const classes = useStyles()
   
    return(
        <div className={classes.root}>
           <button className={classes.bt} >Add Photo</button>
        </div>
    )
  } 

  export default class Main extends Component {
    
    render() {
        return (
            <div className="main">
                <div className="header">
                <div className="search_header">
               <span /> 

               <input  />
                </div>

                <ThemeProvider
               theme={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                boxShadow: '0 3px 5px 0 rgba(255, 105, 135, .3)',
              }} >
                   <AddIcon />
               <Button />
               </ThemeProvider>
                </div>
            </div>
        )
    }
}
