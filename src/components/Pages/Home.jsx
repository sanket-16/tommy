import React from 'react'
import tommy from '../assets/tommy.png'
import arrow from '../assets/arrow.svg'
import hero from '../assets/hero.svg'
import secure from '../assets/secure.svg'
import welcome from '../assets/welcome.svg'
import meme from '../assets/meme.svg'
import customizable from '../assets/customizable.svg'
import anime from '../assets/anime.svg'
import utility from '../assets/utility.svg'
import DiscordLogo from '../assets/DiscordLogo.svg'
import PatreonLogo from '../assets/PatreonLogo.svg'
import Server from '../assets/Server.svg'
import user from '../assets/user.svg'


const Home = () => {
 return (
  <div className='bg-dark_blue bg-hero-pattern bg-no-repeat  flex flex-col'>
      <div className="p-6 flex justify-center">
      <img src={tommy} alt="tommy_logo" className='w-36 h-36  '/>
      </div>
      <div>
      <span className='flex flex-col justify-center text-white font-bold text-5xl text-center'><span>One <span className='pr-2 pl-2 text-fuchsia'>Bot</span></span> for all of your needs.</span>
      <span className=" flex justify-center p-4 mx-auto max-w-md text-base font-regular text-white text-center text-align-center">
        A full fledged package of awesome features that every 
      discord user wants from providing utility to admins to 
      entertaining normal people in your server.
      </span>
      </div>
      <div className='flex justify-center'>
        <button onClick={invite} className=' transition duration-500 ease-in-out p-6 m-6 bg-white text-fuchsia font-bold rounded-full py-5 px-11 text-xl hover:text-white hover:bg-fuchsia transform hover:-translate-y-1 hover:scale-110'>
        Invite Now
        </button>
      </div>
      <img src={arrow} alt="arrow" className='flex justify-center mx-auto w-14 h-14 cursor-pointer m-20 animate-bounce ' />
      <div className="bg-dark_blue pt-6">
       <div className="text-white text-5xl font-bold flex justify-center">WHY TOMMY?</div>
       <div className="flex flex-col md:flex-row justify-between">
        <div className='flex md:p-14 m-14 order-first items-center'>
          <img src={hero} alt="hero" className='animate-spin-slow flex-shrink'/>
        </div>
        <div className="flex flex-col order-last m-2 p-2 md:p-10 md:m-10 divide-y divide-fuchsia ">
        <div>
         <div className='flex flex-col divide-y md:divide-none divide-fuchsia md:flex-row'>
         <div className="flex flex-col p-2 md:p-8">
          <div className='flex flex-row'>
          <img src={secure} alt="security" className='h-10 w-10'/>
          <span className='flex text-xl text-white font-bold items-center pl-4'>Security</span>
          </div>
          <span className='text-xs text-white max-w-xs'>We have very secure channels for transmission of data and this is example text.</span>
         </div>
         <div className="flex flex-col p-2 md:p-8">
          <div className='flex flex-row'>
          <img src={welcome} alt="welcome" className='h-10 w-10'/>
          <span className='flex text-xl text-white font-bold items-center pl-4'>Welcome</span>
          </div>
          <span className='text-xs text-white max-w-xs'>We have very secure channels for transmission of data and this is example text.</span>
         </div>
        </div>
        </div>
         <div>
         <div className='flex flex-col divide-y md:divide-none divide-fuchsia md:flex-row'>
         <div className="flex flex-col p-2 md:p-8">
          <div className='flex flex-row'>
          <img src={anime} alt="anime" className='h-10 w-10'/>
          <span className='flex text-xl text-white font-bold items-center pl-4'>Anime</span>
          </div>
          <span className='text-xs text-white max-w-xs'>We have very secure channels for transmission of data and this is example text.</span>
         </div>
         <div className="flex flex-col p-2 md:p-8">
          <div className='flex flex-row'>
          <img src={meme} alt="meme" className='h-10 w-10'/>
          <span className='flex text-xl text-white font-bold items-center pl-4'>Meme</span>
          </div>
          <span className='text-xs text-white max-w-xs'>We have very secure channels for transmission of data and this is example text.</span>
         </div>
        </div>
        </div>
        <div >
        <div className='flex  flex-col divide-y md:divide-none divide-fuchsia md:flex-row'>
         <div className="flex flex-col p-2 md:p-8">
          <div className='flex flex-row'>
          <img src={utility} alt="utility" className='h-10 w-10'/>
          <span className='flex text-xl text-white font-bold items-center pl-4'>Utility</span>
          </div>
          <span className='text-xs text-white max-w-xs'>We have very secure channels for transmission of data and this is example text.</span>
         </div>
         <div className="flex flex-col p-2 md:p-8">
          <div className='flex flex-row'>
          <img src={customizable} alt="customization" className='h-10 w-10'/>
          <span className='flex text-xl text-white font-bold items-center pl-4'>Customization</span>
          </div>
          <span className='text-xs text-white max-w-xs'>We have very secure channels for transmission of data and this is example text.</span>
         </div>
        </div>
        </div>
        </div>
       </div>
      </div>
      <div className="bg-dark_blue bg-hero-pattern-2 bg-no-repeat bg-right text-white pt-6 pb-64">
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='flex flex-col m-6 p-6'>
          <span className='font-bold text-5xl md:text-6xl'>Join Our</span>
          <span className='font-semi-bold text-fuchsia text-4xl md:text-5xl'>Community Today!</span>
          </div>
          <div className='flex flex-row justify-center'>
            <img src={DiscordLogo} alt="discord_logo"  onClick={discord} className='w-10 h-10 m-14 cursor-pointer' />
            <img src={PatreonLogo} alt="patreon_logo"  onClick={patreon} className='w-10 h-10 m-14 cursor-pointer'/>
          </div>
        </div>
        <div className='flex flex-col md:flex-row p-8 text-white'>
          <div className='flex flex-col p-6 mr-8'>
          <div className='flex flex-row '>
            <img src={user} alt="user_logo" className='w-10 h-10'/>
            <span className='pl-4 text-2xl font-medium flex items-end'>TOTAL USERS</span>
            </div>
            <span className='text-4xl pt-2 font-bold'>1.7 MILLION+</span>
            </div>
            <div className='flex flex-col p-6 ml-0 md:ml-8'>
           <div className='flex flex-row '>
            <img src={Server} alt="server_logo" className='w-10 h-10'/>
            <span className='pl-4 text-2xl font-medium flex items-end'>TOTAL SERVERS</span>
            </div>
            <span className='text-4xl pt-2 font-bold'>2500+</span>
            </div>
          </div>
      </div>
  </div>
 )
}

function invite() {
  window.location.href =
    'https://discord.com/api/oauth2/authorize?client_id=697463492457922571&permissions=2147483639&redirect_uri=https%3A%2F%2Fwww.lazybuds.xyz%2Ftommy&response_type=code&scope=identify%20bot'
}

function discord() {
  window.location.href = 'https://discord.com/invite/A2SPMjZ'
}

function patreon() {
  window.location.href = 'https://discord.com/invite/A2SPMjZ'
}


export default Home
