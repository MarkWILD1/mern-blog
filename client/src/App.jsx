import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from  './pages/Home';
import Dashboard from './pages/Dashboard'
import Projects from  "./pages/Projects";
import About from './pages/About';
import SignIn from "./pages/SignIn";
import SignUp from './pages/Signup';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' component={<Home />}/>
        <Route path='/dashboard' component={<Dashboard />}/>
        <Route path='/projects' component={<Projects />}/>
        <Route path='/about' component={<About />}/>
        <Route path='sing-in' component={<SignIn />}/>
        <Route path='sign-up' component={<SignUp />}/>
        
      </Routes>
    </BrowserRouter>
  )
}
