import React from 'react'
import Logo from '../../assets/logo-transparent.png'
import '../../App.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-left">
                    <Link to='/' className="header-brand">
                        <img src={Logo} alt="" />
                        <h2>Work Wise</h2>
                    </Link>
                </div>
                <div className="header-right">
                    <div className="header-login">
                        <Link to='/login'>Login</Link> {/**styling link in index.css with anchor tag */}
                        <Link to='/register'>Register</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header