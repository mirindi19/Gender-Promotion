import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import"./home.scss"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import EmpRadar from"../../components/radar/EmpRadar"
import EmpPieChart from "../../components/chart/EmpPieChart"
import StudentFeatured from "../../components/featured/StudentFeatured"
import StudentChart from "../../components/chart/StudentChart"
import AcademicPieChart from"../../components/chart/AcademicPieChart"
import AcademicRadar from "../../components/radar/AcademicRadar"
const home = () => {
  return (
    <div className="home">
       <Sidebar/>
       <div className='homeContainer'>
        <Navbar/>
        <div className="widgets">
        <Widget type="user"/>
        <Widget type="organisation"/>
        <Widget type="academic"/>
        <Widget type="employee"/>
        </div>
        <div className="charts">
          <Featured/>
           <Chart/>
        </div>

        <div className="empChartt">
          <EmpPieChart/>
          <EmpRadar/>
         </div>
         
        <div className="studentChart">
        <StudentFeatured/>
        <StudentChart/>
        </div>

        <div className="academicPieRadar">
        <AcademicPieChart/>
        <AcademicRadar/>
        </div>

        </div>
      </div>
  )
}

export default home