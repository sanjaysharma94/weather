import { Search } from './components/Search'
import { Getlocation} from "./components/Getlocation"
import './App.css'
import { useEffect, useRef } from 'react'
import axios from "axios"
import { useDispatch , useSelector } from "react-redux"
import { Slider } from './components/Corousel'
import { useState } from 'react'
import { forecast ,updateCity} from './Redux/action'
import { coordinates } from "./Redux/action"
import {Map} from "./components/Map"

function App() {

  const dispatch = useDispatch();

  const [place, setPlace] = useState("")

   

  let latitude  = useRef("")
  let longitude = useRef("")
  
  latitude.current = useSelector((store)=>store.credential.cor.latitude)
  longitude.current = useSelector((store)=>store.credential.cor.longitude)
  

  
 

  const {city} = useSelector((store)=>store.credential)
  
  
  
 
  
//console.log(latitude,longitude)
let Id = useRef();

  useEffect(()=>{
  
     Id.current = setTimeout( () => {

      
     if(city)
     {  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2d9c313e67589677085ed508b96ae174`)
        .then((r)=>{
          //setCurrentWeather(r.data)
          
          const lat =  r.data.coord.lat
         
          const lng =  r.data.coord.lon
          

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
      
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude.current}&lon=${longitude.current}&units=metric&exclude=hourly,minutely,alerts&appid=08f94d62d8b644853264d64f72bedf08`)
       .then((r)=>{
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

     {place && <h1>{place}</h1>}

    <Slider></Slider>
    <Map/>
    
        
    </div>
  )
}

export default App
