import { Menu, MenuItem } from '@material-ui/core'
import React ,{useState,useEffect}from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {authService} from '../../../service/auth'
import Logo from './../../../assets/image/testlogo.png'
import Notification from './../../../assets/image/notification.svg'
import downArrow from './../../../assets/image/select-arrow.svg'
import profile from './../../../assets/image/profile.jpg'
import './Topbar.scss'
// import { useSelector } from 'react-redux'

function Topbar(props) {
    let navigate=useNavigate();
   // const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [currentUser, setCurrentUser] = useState({})
    // const user = useSelector((state) => state.userReducer.user)
    const open = Boolean(anchorEl);
   useEffect(() => {
    setCurrentUser(authService.getCurrentUser())
   }, [])
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handlelogout =()=>{
        authService.handleLogout(navigate)
    }
    console.log(currentUser)
    return (
        <nav className="navbar navbar-light admin-navbar">
          
            <Link className="navbar-brand  p-0" to="/">
                <img src={Logo} alt="KC header logo" width={210} height={40} className="mr-2" />
                 {/* <b>ATOTAX</b>  */}
            </Link>
            <ul className="nav">
                <li className="nav-item border-right pr-4">
                    {/* <img height={30}   width={30} src={Notification} alt="notification"/> */}
                    <i class="bi bi-bell icon-notification"></i>
                </li>
               
                <li className="nav-item pl-4">
                    <div className="d-flex align-items-center ">
                        <img src={profile} width={40} height={40} alt="profile" style={{borderRadius:"50%"}}/>
                       
                        <div onClick={handleClick} className="cursor-pointer d-flex" style={{lineHeight: 'normal'}}>
                            <span className="mx-2 username-topbar text-uppercase">{currentUser.userName}</span>
                            <img src={downArrow} alt="down arrow" />
                        </div>
                    
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            getContentAnchorEl={null}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                        >
                            <MenuItem alignItems='center' onClick={() => {handlelogout()}}>Logout</MenuItem>
                           
                        </Menu>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Topbar
export { Topbar }