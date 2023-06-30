import "./Components.scss";
import {NavLink} from "react-router-dom";
const Header=()=>{
    return(
        <>
        <div className="header">

           <div className="logo">
            <img src="https://static.bose.com/etc/designs/bose/consumer-products-2016/design/images/bose_logo.png" alt="logo"/>
           </div>

           <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/earphone">Earphones</NavLink>
            <NavLink to="/earbuds">Earbuds</NavLink>
            <NavLink to="/speakers">Speakers</NavLink>
           </div>
        </div>
        </>
    )
}

export default Header