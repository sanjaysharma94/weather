import '../App.css'

import {  useSelector } from "react-redux"
import { DateTime } from 'luxon'
import cloud from "../IconFiles/clouds.png"
import rain from "../IconFiles/rain.png"
import sun from "../IconFiles/sun.png"



export const Slider = () => {
const  data = useSelector((store)=>store.credential.forecast)        
let time = (tm)=>{
 return DateTime.fromSeconds(tm).toFormat("ccc")

};
 
  return (
    <div className='scroll' style={{  margin:"auto",  display:"flex", gap:"20px", flexFlow:'nowrap', width:"50%",overflowX:"scroll",scrollbarColor: "rebeccapurple" }} >
      
        {data.map((e) => (
          <div
            key={e.dt}
            style={{
              border: "dotted black",
              minWidth: "100px",
              height: "150px",
              
            }}
          >
            <p style={{ marginTop: 0.5, marginBottom: 0.5 }}>{time(e.dt)}</p>
            <p style={{ marginTop: 0.5, marginBottom: 0 }}>{e.temp.day}°C</p>
            <img 
            src= {e.weather[0].main==="Clear"?sun : e.weather[0].main==="Rain" ? rain :cloud}
            style=
            {
              {
                width: "80%",
                height: "50%",
                marginTop: 0,
                marginBottom: 0
              }
            }
              alt="mausamType"
            />
            <h4 style={{ marginTop: 0 , marginBottom: 0 }}>{e.weather[0].main}</h4>
          </div>
        ))}
      
    </div>
  )
  
    


    
}