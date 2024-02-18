import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"
import {ReactComponent as RadLogo} from "../../assets/reshot-icon-shirt-6FJ2NWK9TY.svg"
import "./navigation.styles.scss"

const Navigation = () => {
  return (
    <Fragment>
        <div className="navigation">
            <Link className="logo-link" to="/">
                <RadLogo width={45} className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
                <Link className="nav-link" to="/authentication">
                    SIGN-IN
                </Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
    
  )
} 

export default Navigation