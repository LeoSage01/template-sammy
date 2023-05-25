import React from 'react';
import './Beneficiary.scss'
import { FiSearch } from 'react-icons/fi'
import { FaGreaterThan } from 'react-icons/fa'



const Beneficiary = (props) => {
    return (
        <div>
            <h3>Beneficiaries</h3>
            <div className="container">
                <div className="search">
                    <form >
                        <FiSearch className='search__icon' />
                        <input type="text" placeholder='Account number or name'
                            style={{
                                paddingLeft: '60px',
                                backgroundColor: 'var(--colorMid)'

                            }}
                        />
                    </form>
                </div>

                <div className="title">
                    <p>Recents</p>
                    <p>Favourites</p>
                </div>

                <div className="accounts"
                    style={{
                        justifyContent: 'space-between'
                    }}
                >
                    <div className="accounts__details">
                        <div className="accounts__details--name">
                            <h5>Zinna Pharmacy and  stores Nigeria ltd</h5>
                        </div>
                        <div className="accounts__details--others">
                            <p>0098982885</p>
                            <p>Access Bank</p>
                        </div>
                    </div>

                    <div className="accounts__logo">
                        <img src="" alt="" />
                    </div>
                </div>

                <div className="accounts"
                    style={{
                        justifyContent: 'space-between'
                    }}
                >
                    <div className="accounts__details">
                        <div className="accounts__details--name">
                            <h5>Zinna Pharmacy and  stores Nigeria ltd</h5>
                        </div>
                        <div className="accounts__details--others">
                            <p>0098982885</p>
                            <p>Access Bank</p>
                        </div>
                    </div>

                    <div className="accounts__logo">
                        <img src="" alt="" />
                    </div>
                </div>

                <div className="accounts"
                    style={{
                        justifyContent: 'space-between'
                    }}
                >
                    <div className="accounts__details">
                        <div className="accounts__details--name">
                            <h5>Andiline Sampson Emenike</h5>
                        </div>
                        <div className="accounts__details--others">
                            <p>0098982885</p>
                            <p>First Bank of Nigeria</p>
                        </div>
                    </div>

                    <div className="accounts__logo">
                        <img src="" alt="" />
                    </div>
                </div>


                <div className='button'>
                    <p>View all</p>
                    <FaGreaterThan className='icon' />
                </div>


            </div>


        </div>
    );
}

export default Beneficiary;