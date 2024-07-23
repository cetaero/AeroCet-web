import { NotFound } from '../Pages/404Error';
import { Home } from '../Pages/Home'
import { Teams } from '../Pages/Teams'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export const App = ()=>{
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  )
}


