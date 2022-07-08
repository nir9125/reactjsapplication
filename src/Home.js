import React from 'react';
import './index.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Typewriter from "typewriter-effect";

const Home = ()=>
{
   return (
       <div className="home">
           <>
          <div className="icon1">
          <i class="fas fa-clock" ></i>&nbsp;&nbsp;&nbsp;
          <i class="fas fa-cloud-moon" ></i>&nbsp;&nbsp;&nbsp;
          <i class="fas fa-calendar-alt"></i>
          </div>
          <div className="typewriter">
          <Typewriter
             onInit={(typewriter)=> {
                    typewriter
                    .typeString("WELCOME TO NETFIX")
                    
                    .start();
                    }}
  />
          </div>
          <div className="typewriter1">
          <Typewriter 
             onInit={(typewriter)=> {
                
                    typewriter
                   
                    .pauseFor(3000)
                    .typeString("Know Current Time, Weather and Date at One Place!")
                    .start();
                    }}
  />
          </div>
          </>
       </div>
   )
}

export default Home;

