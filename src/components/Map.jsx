import {  useSelector } from "react-redux"


export function Map() {

    const {city} = useSelector((store)=>store.credential)

    return  <iframe
    title="weather"
   width="800"
    height="400"
    id="gmap_canvas"
    src={`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
   frameBorder="0"
   scrolling="no"
  marginHeight="0"
 marginWidth="0"
></iframe>

}
