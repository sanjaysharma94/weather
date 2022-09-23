import React from 'react';
import {  useSelector } from "react-redux"
import { DateTime } from "luxon";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


export const options = {
  maintainAspectRatio: true,
  
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'weather Tempreture',
    },
  },
};






export function TempArea() {

  let time1 = (tm)=>{

  
    return (DateTime.fromSeconds(tm).toFormat("hh a"))
  
  };

  const  hourlydata = useSelector((store)=>store.credential.hourly)
  

const temp = hourlydata.slice(0,9)
const labels = temp.map((e)=>time1(e.dt))
const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Tempreture',
      data: temp.map((e) => e.temp),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  return  <div style={{ margin:"auto", height:"400px", width:"800px" ,marginTop:"10px", marginBottom:"170px"}} >
    <div style={{display:"flex", justifyContent:"space-between" }}>
    <div><h2>Pressure</h2>
    <h2>{temp[0]?.pressure}</h2></div><div><h2>Humidity</h2>
    <h2 >{temp[0]?.humidity}</h2></div>
    </div>
    <Line 
     options={options} data={data} />;
     </div> 
}
