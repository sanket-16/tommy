import React from 'react'
import {NavLink as Link} from 'react-router-dom'

const AccordionNav = ({toggle}) => {
 return (
  <div>
     <nav
      className=' md:h-16 text-white font-medium bg-dark_blue md:p-8 '
    >

      <div className='p-8 flex flex-col  md:flex-row '>
        <Link to='/commands' exact className='p-2 m-2 md:pr-4 md:pl-4 md:py-4 hover:bg-gray-700 rounded-md hover:text-fuchsia focus:text-fuchsia ' activeStyle={{color: "#EB459E", background:" #1f2937"}}>
          Meme
        </Link>
        <Link to='/commands/anime' className='p-2 m-2 justify-center md:p-4 hover:bg-gray-700 rounded-md hover:text-fuchsia focus:text-fuchsia' activeStyle={{color: "#EB459E", background:" #1f2937"}}>
          Anime
        </Link>
        <Link to='/commands/utility' className='p-2 m-2 md:p-4 hover:bg-gray-700 rounded-md hover:text-fuchsia focus:text-fuchsia' activeStyle={{color: "#EB459E", background:" #1f2937"}}>
          Utility
        </Link>
        <Link to='/commands/settings' className='p-2 m-2 md:p-4 hover:bg-gray-700 rounded-md hover:text-fuchsia focus:text-fuchsia' activeStyle={{color: "#EB459E", background:" #1f2937"}}>
          Settings
        </Link>
        <Link to='/commands/moderation' className='p-2 m-2 md:p-4 hover:bg-gray-700 rounded-md hover:text-fuchsia focus:text-fuchsia' activeStyle={{color: "#EB459E", background:" #1f2937"}}>
          Moderation
        </Link> 
        <Link to='/commands/fun' className='p-2 md:p-4 m-2 hover:bg-gray-700 rounded-md hover:text-fuchsia focus:text-fuchsia' activeStyle={{color: "#EB459E", background:" #1f2937"}}>
          Fun
        </Link> 
        <Link to='/commands/misc' className='p-2 md:p-4 m-2 hover:bg-gray-700 rounded-md hover:text-fuchsia focus:text-fuchsia' activeStyle={{color: "#EB459E", background:" #1f2937"}}>
          Misc
        </Link>  
        <Link to='/commands/info' className='p-2 md:p-4 m-2 hover:bg-gray-700 rounded-md hover:text-fuchsia focus:text-fuchsia' activeStyle={{color: "#EB459E", background:" #1f2937"}}>
           Info
        </Link>
      </div>
    </nav>
  </div>
 )
}

export default AccordionNav;
