import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Commands from './components/Pages/Commands'
import Login from './components/Pages/Login'
import Footer from './components/Footer'

function App() {
  return (
  <>
  <BrowserRouter>
    <Navbar/>
    <div className="pages">
    <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/commands'component={Commands}/>
    <Route path='/support'component={discord}/>
    <Route path='/login'component={Login}/>
    </Switch>
    </div>
   <Footer/>
  </BrowserRouter>
  </>
  )
}

function discord() {
  window.location.href = 'https://discord.com/invite/A2SPMjZ'
}

export default App
