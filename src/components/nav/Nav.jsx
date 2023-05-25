import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'

import Logo from '../../assets/opay.png'
import './Nav.scss'
import { RiBankFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav>
            <Link to={"/opay"} style={{ textDecoration: 'none', color: '#000' }}>
                <div className="nav">
                    <div className="nav__logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <div className="nav__wrapper">
                            <h3>
                                To OPay Account
                            </h3>
                            <div className="pic"></div>
                            <p>Free instant transfers with zero issues</p>
                        </div>
                        <div className="nav__icon">
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to={"/otherBanks"} style={{ textDecoration: 'none', color: '#000' }}>
                <div className="nav">
                    <div className="nav__logo">
                        <RiBankFill />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <div className="nav__wrapper">
                            <h3>
                                To Other Bank Accounts
                            </h3>
                            <div className="pic">

                            </div>
                            <p>Transfers to other bank accounts are free</p>
                        </div>
                        <div className="nav__icon">
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </nav>
    );
}

export default Nav;