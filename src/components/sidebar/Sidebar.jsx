import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsTwoToneIcon from '@mui/icons-material/ProductionQuantityLimitsTwoTone';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import BungalowIcon from '@mui/icons-material/Bungalow';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
const Sidebar = () => {
    const history=useHistory()
    const handleLogout=()=>{
        localStorage.removeItem('access-token')
        history.push("/",{push:true})
    }
  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>MEGEPROF</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/dashboard" style={{ textDecoration:"none"}}>
                <li>
                      <DashboardIcon className="icon"/>
                    <span>dashboard</span>
                </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/organisation" style={{ textDecoration:"none"}}>
                <li>
                <ProductionQuantityLimitsTwoToneIcon className="icon" />
                    <span>Organisation</span>
                </li>
                </Link>
                <Link to="/users" style={{ textDecoration:"none"}}>
                <li>
                <PersonOutlineOutlinedIcon className="icon"/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/academic" style={{ textDecoration:"none"}}>
                <li>
                    <BorderColorIcon className="icon"/>
                    <span>Academic</span>
                </li>
                </Link>
                <Link to="/collection" style={{ textDecoration:"none"}}>
                <li>
                    <BungalowIcon className="icon"/>
                    <span>Employee</span>
                </li>
                </Link>
                <p className="title">USEFUL</p>
                <li>
                <QueryStatsIcon className="icon"/>
                    <span>stats</span>
                </li>
                <li>
                <CircleNotificationsIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                <PsychologyIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                <SettingsApplicationsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                <AccountCircleIcon className="icon"/>
                    <span>Profile</span>
                </li>
                
                <li>
                    
                    <Button onClick={handleLogout}>
                    <ExitToAppIcon className="icon"/>
                    <span >Logout</span>
                    </Button>
                    
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar