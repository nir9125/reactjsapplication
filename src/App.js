import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './NavBar.js';

const dateBuilder = (d) => 
{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


const App = ()=>
{
  let myDate = new Date();
let hrs = myDate.getHours();

let greet='';

if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';

  let currDate=new Date();
  let hr=currDate.toLocaleTimeString();
  
 const [ curTime , setTime]=useState(hr);
 function UpdateTime()
 {
   
  hr=(new Date()).toLocaleTimeString();
  console.log();
  setTime(hr);
 }

  setInterval(UpdateTime,1000);
  return(
       

    <div className='slider'>
    <div className='Main1'>
    <div id="Icons">{greet==='Good Morning'?(<i class="fas fa-cloud-sun"></i>):((greet==='Good Evening')?(<i class="fas fa-cloud-moon"></i>

):(<i class="fas fa-sun"></i>))}</div>
    <center><p className='time'>{curTime} </p></center>
    <p id='dateAll'>{dateBuilder(new Date())}</p>
    <p id='greeting'>{greet} </p>
    
    </div>
    </div>
    
  )
}

export default App;
