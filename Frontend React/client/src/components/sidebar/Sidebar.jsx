import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import RouterIcon from '@mui/icons-material/Router';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
<div className="top">
    <span className="logo">Remote Engineer </span>
</div>
<hr/>

<div className="center">
    <ul>
       
        <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
        </li>
        <li> <PeopleIcon className="icon"/>
            <span>Klanten</span></li>
        <li> <RouterIcon className="icon"/>
            <span>Routers</span></li>
        <li> <SignalCellularAltIcon className="icon"/>
            <span>Status</span></li>
    </ul></div>
<div className="bottom">
    <div className="colorOption"></div>
    <div className="colorOption"></div>
    
</div>

    </div>
  )
}
