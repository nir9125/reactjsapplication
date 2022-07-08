import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Calendar from "react-calendar";
import './cal.css';

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




const Calender= ()=>
{
    const [date, setDate] = useState(new Date());

    const onChange = date => {
      setDate(date);
    };
  return(
      <div className="Cal">
      <div className="Main1">
         <center className="poscal">
           <Calendar onChange={onChange} value={date} />
           </center>
           <p id='dateAll'>Today's Date:-<br/>{dateBuilder(new Date())}</p>
           </div>
      </div>
  )
}

export default Calender;