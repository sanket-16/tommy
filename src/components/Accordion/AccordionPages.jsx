import React from 'react'
import Accordion from './Accordion'
import {anim, fn, infos, mem, mod, msc, setting, utils} from '../assets/commnds.json'

export const Anime = () => {
 return (
  <div className=' bg-dark_blue text-white p-14'>
   {anim.map((anim)=>{
    return(
   <Accordion name={anim.name}desc={anim.desc}/>
    )
    }
    )
    }
  </div>
 )
}

export const Fun = () => {
 return (
  <div className=' bg-dark_blue text-white p-14'>
   {fn.map((fn)=>{
    return(
   <Accordion name={fn.name}desc={fn.desc}/>
    )
    }
    )
    }
  </div>
 )
}

export const Info = () => {
 return (
  <div className=' bg-dark_blue text-white p-14'>
   {infos.map((infos)=>{
    return(
   <Accordion name={infos.name}desc={infos.desc}/>
    )
    }
    )
    }
  </div>
 )
}

export const Meme = () => {
 return (
  <div className=' bg-dark_blue text-white p-14'>
   {mem.map((mem)=>{
    return(
   <Accordion name={mem.name}desc={mem.desc}/>
    )
    }
    )
    }
  </div>
 )
}

export const Moderation = () => {
 return (
  <div className=' bg-dark_blue text-white p-14'>
   {mod.map((mod)=>{
    return(
   <Accordion name={mod.name}desc={mod.desc}/>
    )
    }
    )
    }
  </div>
 )
}

export const Misc = () => {
 return (
  <div className=' bg-dark_blue text-white p-14'>
   {msc.map((msc)=>{
    return(
   <Accordion name={msc.name}desc={msc.desc}/>
    )
    }
    )
    }
  </div>
 )
}

export const Settings = () => {
 return (
  <div className=' bg-dark_blue text-white p-14'>
   {setting.map((setting)=>{
    return(
   <Accordion name={setting.name}desc={setting.desc}/>
    )
    }
    )
    }
  </div>
 )
}

export const Utility = () => {
 return (
  <div className=' bg-dark_blue text-white p-14'>
   {utils.map((utils)=>{
    return(
   <Accordion name={utils.name}desc={utils.desc}/>
    )
    }
    )
    }
  </div>
 )
}

