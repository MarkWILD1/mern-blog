import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from  './pages/Home';
import Dashboard from './pages/Dashboard'
import Projects from  "./pages/Projects";
import About from './pages/About';
import SignIn from "./pages/SignIn";
import SignUp from './pages/Signup';
import Header from './components/Header';

export default function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/sing-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        
      </Routes>
    </BrowserRouter>
  )
}
