import { NotFound } from '../Pages/404Error';
import { Home } from '../Pages/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export const App = ()=>{
  
  return (
    <div className='app'>
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
    </div>
  )
}


