import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import './bootstrap.min.css';
import App from './App.js';
import Weather from './Weather.js';
import Calender from './Calender.js';
import Home from './Home';


function Up1(e)
{
    console.log(e);
    if(e==="App")
    {
           ReactDOM.render(<><App/></>, document.getElementById('root'));

    }
    else if(e==="Weather")
          {
              ReactDOM.render(<><Weather/></>, document.getElementById('root'));
          }
    else if(e==="Calender"){

              ReactDOM.render(<><Calender/></>, document.getElementById('root'));
    }
    else 
    {
              ReactDOM.render(<><Home/></>, document.getElementById('root'));
    
    }

}

const NavBar = ()=>
{
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <span id='brand'  onClick={() => Up1("App1")}><i class="far fa-snowflake" style={{fontSize:"40px"}}></i>&nbsp;&nbsp;NETFIX</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
   
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <span id='a' onClick={() => Up1("App")}><i class="fas fa-clock" style={{fontSize:"30px"}}></i>&nbsp;&nbsp;CURRENT TIME</span> <span class="sr-only">(current)</span>
      </li>
      <li class="nav-item active">
       <span id='a' onClick={() => Up1("Weather")}><i class="fas fa-cloud" style={{fontSize:"30px"}}></i>&nbsp;&nbsp;CURRENT WEATHER</span><span class="sr-only">(current)</span>
      </li>
      <li class="nav-item active">
        <span id='a' onClick={() => Up1("Calender")}><i class="fas fa-calendar-alt" style={{fontSize:"30px"}}></i>&nbsp;&nbsp;CALENDAR</span><span class="sr-only">(current)</span>
      </li>
      
  </ul>
  </div>

    
     

  
</nav>
</>
    )
}

export default NavBar;