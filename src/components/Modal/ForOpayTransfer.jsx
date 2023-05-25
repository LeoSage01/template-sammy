import React from 'react';
import Header from '../Header/Header';
import { FaGreaterThan, FaUsers } from 'react-icons/fa';
import { AiOutlineScan } from 'react-icons/ai';
import './ForOpayTransfer.scss'


function ForOpayTransfer(props) {
    return (
        <div
         style={{
            height: '100vh'
         }}
        >
            <Header transfer='Transfer To Bank Account'
                history='History'
            />

            <div className="contents">
                <h3
                    style={{
                        marginBottom: '5px'
                    }}
                >Recipient Account</h3>
                <div className="search">

                    <input type="text" placeholder='Phone No./OPay/Account No./Name' />
                    <AiOutlineScan className='icon' />

                </div>


                <h3
                    style={{
                        marginBottom: '5px'
                    }}
                >Beneficiaries</h3>
                <div className="container">

                    <div className="title">
                        <p>Recents</p>
                        <p>Favourites</p>
                    </div>

                    <div className="accounts">
                        <div className="accounts__logo">
                            <img src="" alt="" />
                        </div>
                        <div className="accounts__details">


                            <div className="accounts__details--name">
                                <h4>Andiline Sampson Emenike</h4>
                            </div>

                            <div className="accounts__details--others">
                                <p>0098982885</p>
                            </div>
                        </div>


                    </div>

                    <div className="accounts">
                        <div className="accounts__logo">
                            <img src="" alt="" />
                        </div>
                        <div className="accounts__details">


                            <div className="accounts__details--name">
                                <h4>Andiline Sampson Emenike</h4>
                            </div>

                            <div className="accounts__details--others">
                                <p>0098982885</p>
                            </div>
                        </div>


                    </div>

                    <div className="accounts">
                        <div className="accounts__logo">
                            <img src="" alt="" />
                        </div>
                        <div className="accounts__details">


                            <div className="accounts__details--name">
                                <h4>Andiline Sampson Emenike</h4>
                            </div>

                            <div className="accounts__details--others">
                                <p>0098982885</p>
                            </div>
                        </div>
                    </div>



                <div className='button'>
                    <p>View all</p>
                    <FaGreaterThan className='icon' />
                </div>
                </div>


                <div className="otherUsers">
                    <div className="otherUsers__icon">
                        <FaUsers style={{
                            fontSize: '25px'
                        }}
                        />
                    </div>

                    <div className="otherUsers__text">

                        <h5>See who else is using OPay</h5>
                        <p
                        style={{
                            fontSize: '15px'
                        }}>185 of your contacts use OPay</p>
                    </div>

                    <span class="material-symbols-outlined"
                        style={{
                            color: 'var(--colorDark)',
                            fontSize: '30px'
                        }}
                    >
                        chevron_right
                    </span>
                </div>


            </div>
        </div>
    );
}

export default ForOpayTransfer;