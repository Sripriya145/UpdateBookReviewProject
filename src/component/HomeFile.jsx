import React from 'react'
import NavBar from './Header/NavBar';
import Button from '@mui/material/Button';
import {Link } from 'react-router-dom';
const HomeFile = () => {
  return (
    <div>
      <div >
        <div className='Main'>
        <div className='btn'>
        <Link to='/Home'>
        <Button variant="text">Start</Button>
        </Link>
        </div>
        </div>
        
    </div>
      <NavBar />   
        
    </div>
  )
}

export default HomeFile