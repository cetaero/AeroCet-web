import About from "../Components/About"
import Contact from "../Components/Contact"
import Intro from "../Components/Intro"
import Navbar from "../Components/Navbar"
import Team from "../Components/Team"
import './Home.css'

export const Home = () =>{
      return(
          <div className="flex-row flex w-svw h-svh">
               <About/>
               <Contact/>
               <Team/>

          </div>
      )    
}