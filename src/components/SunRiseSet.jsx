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
      text: 'sunrise sunset',
    },
  },
};






export function SunRise() {

  let time1 = (tm)=>{

  
    return (DateTime.fromSeconds(tm).toFormat("hh.mm"))
  
  };

  let time2 = (tm)=>{

  
    return (DateTime.fromSeconds(tm).toFormat("hh:mm a"))
  
  };
  

  const  currentdata = useSelector((store)=>store.credential.current)

 const labels = ["sunrise","sunset"]
 const data = {
    labels ,
   datasets: [
    {
      fill: true,
       label: "sunrise sunset",
       data:currentdata.map((e)=>time1(e)),
       borderColor: 'rgb(235, 156, 53)',
       backgroundColor: 'rgba(235, 177, 53, 0.959)',
    },
  ],
 };

  return  <div style={{ margin:"auto", height:"400px", width:"800px" ,marginTop:"10px", marginBottom:"170px"}} >
    <div style={{display:"flex", justifyContent:"space-between" }}>
    <div><h2>Sunrise</h2>{ currentdata[0] && <h2>{time2(currentdata[0])}</h2>}</div>
    <div><h2>Sunset</h2>{currentdata[1] && <h2>{time2(currentdata[1])}</h2>}</div>
    </div>
    {<Line options={options} data={data} />} ;
      </div> 
 }
