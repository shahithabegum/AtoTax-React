import Sidenav from "../components/sidenav/Sidenav";
import Topbar from "../components/topbar/Topbar";
import { Row } from 'react-bootstrap'
import { Outlet,Navigate} from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars';
import {authService} from '../../service/auth'
import './Layout.scss'

const CommonLayout = () => {
  
  if(!authService.isAuthenticated()) {
    return <Navigate to='/login' />
}
  return (
    <div>
        <Topbar/> 
      
      <div className="main  pt-5">
        <div className="side">  <Sidenav/> </div>
     
      <div className="other">
      
      <Scrollbars style={{ width: "100%", height: '100vh' }}>
      <Row className="p-2 m-0 main-content">
                            {/* {childRoutes.length > 0 && renderRoutes(childRoutes)} */}
                            <Outlet />
                        </Row>
                        </Scrollbars>
      </div>
      </div>
      
 
    </div>
  )
}

export default CommonLayout