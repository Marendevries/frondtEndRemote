import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search.."/>
                <SearchIcon/>
            </div>
            <div className="items">
                <div className="item"></div>
                <NotificationsIcon className="icon"/>
                <div className="item"></div>
                <AccountCircleIcon className="icon"/>

            </div>
            
        </div>
    </div>
  )
}

export default Navbar;
