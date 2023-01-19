import React from 'react'
import logo from '../assets/logo_inshorts.png'
import HamburgerIcon from './UI/HamburgerIcon'

const Header = () => {
  return (
    <>
    
        <div className='grid grid-flow-col  w-full h-fit shadow-lg fixed bg-white'>
       
        <div className='justify-self-start ml-4 pt-2 grid grid-flow-col'>
            <HamburgerIcon />
            <div className='mt-4'>
            <h1 className='font-thin'>Menu</h1>
            </div>
           
            
         </div>
          
            <div className='mt-2 mb-2 w-32  '>
                <img src={logo} alt="logo" />
            </div>
        </div>
      
        
    </>
  )
}

export default Header
