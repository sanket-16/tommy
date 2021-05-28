import React from 'react'
import lazy from './assets/lazy.png'

const Footer = () => {
 return (
  <div className=' bg-almost_black flex flex-end flex-col order-last'>
   <div className='flex justify-evenly'>
   <div className=' hidden md:flex order-first flex-between flex-col justify-center items-center m-8 p-8'>
   <img src={lazy} alt="lazybuds_logo" className='h-10 w-10 ' />
   <span className='text-white font-medium'>© LazyBuds 2021</span>
   </div>
   <div className='flex flex-last'>
    <div className="flex flex-col text-white justify-start order-first m-4 md:m-8 p-8">
      <span className='flex justify-center text-fuchsia font-semi-bold text-2xl'>Tommy</span>
      <ul>
      <li><a className='flex justify-center hover:text-fuchsia' href="#">Privacy</a></li>
      <li><a className='flex justify-center hover:text-fuchsia' href="#">Support</a></li>
      <li><a className='flex justify-center hover:text-fuchsia' href="#">Vote</a></li>
      </ul>
    </div>
         <div className="flex flex-col text-white justify-start order-last m-4 md:m-8 p-8">
    <span className='flex justify-center text-fuchsia font-semi-bold text-2xl'>Lazy Buds</span>
    <ul>
     <li><a className='flex justify-center hover:text-fuchsia' href="#">Hideaki</a></li>
     <li><a className='flex justify-center hover:text-fuchsia' href="#">Recolt</a></li>
     <li><a className='flex justify-center hover:text-fuchsia' href="#">Discord</a></li>
     <li><a className='flex justify-center hover:text-fuchsia' href="#">Github</a></li>
    </ul>
   </div>
   </div>
   </div>
   <div className='md:hidden flex justify-center items-center p-8'>
   <img src={lazy} alt="lazybuds_logo" className='h-10 w-10 ' />
   <span className='text-white text-xl  font-medium pl-2'>© LazyBuds 2021</span>
   </div>
  </div>
 )
}

export default Footer
