import '../App.css'

import {  useSelector } from "react-redux"
import { DateTime } from 'luxon'



export const Slider = () => {
 

const  data = useSelector((store)=>store.credential.forecast)


         
let time = (tm)=>{

  return DateTime.fromSeconds(tm).toFormat("ccc")

};



    
  return (
    <div style={{ margin:"auto",  display:"flex", gap:"20px", flexFlow:'nowrap', width:"47%",overflowX:"scroll"}} >
      
        {data.map((e) => (
          <div
            key={e.dt}
            style={{
              border: "dotted black",
              width: "100px",
              height: "150px",
              
            }}
          >
            <p style={{ marginTop: 0.5, marginBottom: 0.5 }}>{time(e.dt)}</p>
           
            <p style={{ marginTop: 0.5, marginBottom: 0 }}>{e.temp.day}°C</p>
            <img className="day"
              style={{
                width: "100%",
                height: "50%",
                marginTop: 0,
                marginBottom: 0
              }}
             
              alt="ram"
            />
            <h4 style={{ marginTop: 0 , marginBottom: 0 }}>clear</h4>
          </div>
        ))}
      
    </div>
  )
  
    


    
}