import React from 'react'
import AppBar from '@mui/material/AppBar';
import {  Toolbar,Tab, Button,useTheme ,Typography} from '@mui/material';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import DrawerComponent from '../Header/DrawerComponent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { NavLink,Link } from 'react-router-dom';


const NavBar = () => {
  const page=["Home", "About", "Reviews"];
  const theme=useTheme();
  const ismatch=useMediaQuery(theme.breakpoints.down('sm'));
  console.log(ismatch);
 
  return (
    <>
  <AppBar sx={{backgroundColor:'#a89173', position:'fixed'}}>
  <Toolbar>
    <LocalLibraryRoundedIcon />
{
  ismatch?(
    <>
    <Typography sx={{fontSize:'2rem',padding:"3%"}}>App</Typography>
    <DrawerComponent name={page} />
    </>
  ):
  <>
  
      {
        page.map((item,index)=>
        (
         <NavLink to= {`/${item}`}  style={({isActive})=>{
          return isActive ? {color:"secondary"} : {}
          }} > <Tab key={index} label={item} ></Tab>  
         </NavLink>
        ))
      } 
 
    <Link to={'/signup'}>
    <Button  sx={{marginLeft:'500%'}}variant='contained'>LogIn/SignUp</Button>
    </Link>
    </>
}
  </Toolbar>
  </AppBar>
    </>
    

  )
}

export default NavBar
