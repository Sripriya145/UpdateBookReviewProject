import React from 'react'
import Button from '@mui/material/Button';
import {Link } from 'react-router-dom';
const FrontPage = () => {
  return (
    <>
    <div >
        <div className='Main'>
       
        <div className='content'>
        <h1>
            A Good Book Has No Ending!!
        </h1>
        </div>
        <div className='btn'>
        <Link to='/Home'>
        <Button variant="text">Start</Button>
        </Link>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default FrontPage
 