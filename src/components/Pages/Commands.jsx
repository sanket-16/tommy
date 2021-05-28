import {BrowserRouter ,Switch ,Route} from 'react-router-dom'
import { Anime , Fun , Info , Meme ,Moderation , Misc , Settings , Utility } from '../Accordion/AccordionPages'
import AccordionNav from '../Accordion/AccordionNav'

const Commands = () => {
 return (
  <>
  <BrowserRouter>
  <div className='bg-dark_blue text-white'>
   <div className=' p-8 flex flex-col '>
   <span className='font-bold text-4xl md:px-8'>Commands</span>
   <span className='font-medium text-xm text-opacity-5 md:px-8'>Basically a wiki for all commands inside tommy.</span>
   </div>
   <AccordionNav/>
   <div className='md:pt-10'>
   <Switch>
            <Route exact path='/commands/' component={Meme} />
            <Route  path='/commands/anime' component={Anime} />
            <Route path='/commands/utility' component={Utility} />
            <Route path='/commands/moderation' component={Moderation} />
            <Route exact path='/commands/settings' component={Settings} />
            <Route path='/commands/fun' component={Fun} />
            <Route path='/commands/info' component={Info} />
            <Route path='/commands/misc' component={Misc} />
   </Switch>
   </div>
  </div>
 </BrowserRouter>
 </>
 )
}



export default Commands