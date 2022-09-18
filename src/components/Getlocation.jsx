import { useEffect } from "react";
import { useState } from "react"
import { useDispatch  } from "react-redux"
import { coordinates } from "../Redux/action"


export const Getlocation = ()=>{

const [lat, setLat] = useState(null)
const [lng, setLng] = useState(null)




const dispatch = useDispatch();



           useEffect(()=>{

            if (!navigator.geolocation) {
              alert('Geolocation is not supported by your browser');
            } else {
              
              navigator.geolocation.getCurrentPosition((position) => {

                  
                setLat(position.coords.latitude)
                setLng(position.coords.longitude)

                
              }, () => {
                alert('Unable to retrieve your location');
              },);
            }




           },[])

           useEffect(()=>{

             if(lat) dispatch(coordinates({lat,lng}))

          },[lat,lng])
             
        

    


        

    
}