import { Search } from './components/Search'
import { Getlocation} from "./components/Getlocation"
import './App.css'
import { useEffect, useRef } from 'react'
import axios from "axios"
import { useDispatch , useSelector } from "react-redux"
import { Slider } from './components/Corousel'
import { useState } from 'react'
import { current, forecast ,hourly,updateCity} from './Redux/action'
import { coordinates } from "./Redux/action"
import {Map} from "./components/Map"
import {TempArea} from "./components/TempArea"
import {SunRise} from "./components/SunRiseSet"

function App() {

  const dispatch = useDispatch();  

  let latitude  = useRef("")
  let longitude = useRef("")
  
  latitude.current = useSelector((store)=>store.credential.cor.latitude)
  longitude.current = useSelector((store)=>store.credential.cor.longitude)
  

  
 

  const {city} = useSelector((store)=>store.credential)
  
  
  
 
  

let Id = useRef();

  useEffect(()=>{
  
     Id.current = setTimeout( () => {

      
     if(city)
     {  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2d9c313e67589677085ed508b96ae174`)
        .then((r)=>{
          

          
          
          const lat =  r.data.coord.lat
         
          const lng =  r.data.coord.lon

          const sunrise = r.data.sys.sunrise;
          const sunset = r.data.sys.sunset;
          
          dispatch(current([sunrise,sunset]))
          dispatch(coordinates({lat,lng}))
              
        })
       .catch((e)=>console.log(e.message))
     }
      }, 200); return () => clearTimeout(Id);
 
  },[city])


  useEffect(()=>{

    if(latitude.current){

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude.current}&lon=${longitude.current}&units=metric&appid=08f94d62d8b644853264d64f72bedf08`)
        .then((r)=>{
          dispatch(updateCity(r.data.name))
              
        })
       .catch((e)=>console.log(e.message))
      
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude.current}&lon=${longitude.current}&units=metric&exclude=minutely,alerts&appid=08f94d62d8b644853264d64f72bedf08`)
       .then((r)=>{
        console.log(r.data.current)
        dispatch(hourly(r.data.hourly))
        dispatch(forecast(r.data.daily))
       
    })
      .catch((e)=>console.log(e.message))


      
    }


  },[latitude.current])



  



  return (
    <div className="App"> 
    
      <p style={{ fontsize :  "larger" , color:"#4a54f1"}}>𝓗𝓮𝓵𝓵𝓸 𝓦𝓮𝓪𝓽𝓱𝓮𝓻 𝓐𝓹𝓹</p> 
      <Getlocation></Getlocation>
      <Search></Search>

     {city && <h3>{city}</h3>}

    <Slider></Slider>
    
    <TempArea/>
    <SunRise/>
    <Map/>
    
        
    </div>
  )
}

export default App
