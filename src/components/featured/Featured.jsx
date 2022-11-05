import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect,useState } from "react";
import axios from "axios";
export let totalnumberOfFemale=[]
const Featured = () => {
  const [employeData,setEmployeData]=useState([])
  const [percetFemale,setPercetFemale]=useState('')

  const [numberOfWowen,setNumberOfWomen]=useState('')
  console.log("rez,...",employeData)
  let maleCounter=0
  let femaleCounter=0
  useEffect(()=>{
    async function fetchData(){
      await axios.get('http://localhost:2345/empCollection/collection').then((response)=>{
          setEmployeData(response.data.data);  
           response.data.data.map((p)=>{
            if(p.gender=="Male"){
              maleCounter=maleCounter+1
            }
            else{
              femaleCounter=femaleCounter+1
              totalnumberOfFemale.push(femaleCounter)
            }
            const total=maleCounter+femaleCounter
            const percentageFemale=((femaleCounter*100)/total).toFixed(2)
            console.log("wommm",numberOfWowen)
            setNumberOfWomen(femaleCounter)
             setPercetFemale(percentageFemale)
            
           
            console.log("male female",maleCounter,femaleCounter)
           })
            
          }     
      ).cacth(err=>{
      console.log(err)}
      )
      }
      fetchData();
  },[])
  return (
    <div className="featured">
        <div className="top">
          <h1 className="title">Total Women</h1>
          <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={percetFemale} text={percetFemale+"%"} strokeWidth={5}/>
        </div>
        <p className="title">Total women registered</p>
        <p className="Total">{numberOfWowen}</p>
        <p className="desc">Total Number of man</p>
        {percetFemale} 
        <div className="summary">
          <div className="empowered">
            <div className="empoweredTitle">Student</div>
            <div className="empoweredResult negative">
            <KeyboardArrowDownIcon fontSize="small"/>
              <div className="TotalResultt">15%</div>
            </div>
          </div>
          <div className="empowered">
            <div className="empoweredTitle">Last Week</div>
            <div className="empoweredResult positive">
            <KeyboardArrowUpIcon fontSize="small"/>
              <div className="TotalResultt">16%</div>
            </div>
          </div>
          <div className="empowered">
            <div className="empoweredTitle">Last Month</div>
            <div className="empoweredResult positive">
            <KeyboardArrowUpIcon fontSize="small"/>
              <div className="TotalResultt">40%</div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Featured