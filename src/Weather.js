import React, {useState} from 'react';
import './index.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Typewriter from 'J:\react js\greeting\node_modules\typewriter-effect'
import Typewriter from "typewriter-effect";

const api = {
    key: "03721375fd74a89b6f50b4f585181b10",
    base: "https://api.openweathermap.org/data/2.5/"
  }




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

const Weather=()=>
{
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});


    const search = evt => {
        console.log(evt.key);
        if (evt.key === "Enter") {
          fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
              setWeather(result);
              setQuery('');
              console.log(result);
            });
        }
      }


      function update(e)
      {
       console.log(e.target.value);
        setQuery(e.target.value);
      }

   return(
       <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 15) ? 'typeweather1' : 'typeweather2') : 'typeweather3'}>

       <div className="Main">
        <div className="search-box">
            <input className="search-bar" placeholder="Search...Enter Location" onChange={update}
            value={query} onKeyPress={search}>

            </input>
        </div>

        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : (
          <>
          <div className="icon1">
          <i class="fas fa-cloud-sun" ></i>&nbsp;&nbsp;&nbsp;
          <i class="fas fa-cloud-moon" ></i>
          </div>
          <div className="typewriter">
          <Typewriter
             onInit={(typewriter)=> {
                    typewriter
                    .typeString("Welcome to NETFIX")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Know Weather Of Your Place")
                    .start();
                    }}
  />
          </div>
          </>
        )}
        </div>
        </div>
   )
}

export default Weather;