import UserReport from "../report/UserReport"
import React from "./reportuser.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const Reportuser = () => {
  return (
    <div className="listreport">  
       <Sidebar/>
        
        <div className="listContainerreport">
        <Navbar/>
            <UserReport/>
        </div>
    </div>
  )
}

export default Reportuser