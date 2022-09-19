import { useState } from "react"
import { updateCity } from "../Redux/action"
import { useDispatch  } from "react-redux"
import { useEffect } from "react";


export const Search = ()=>{
const dispatch = useDispatch();

const [city , setCity] = useState()

useEffect(()=>{

    if(city){
        
        const id = setTimeout(()=>{

            dispatch(updateCity(city));
        },1000); return () => clearTimeout(id)
          }

},[city])
    

    return (<>
    
    <input onChange={(e)=>setCity(e.target.value)} placeholder="Enter City Name" type="text" />
    </>)
}