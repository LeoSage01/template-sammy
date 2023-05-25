import React from 'react';
import Header from '../components/Header/Header';
import Nav from '../components/nav/Nav';
import Beneficiary from '../components/Beneficiary/Beneficiary';

const Transfer = () => {
    return (
        <div
        style={{
            height: '80vh'
        }}
        >
            <Header transfer='Transfer' />
            <Nav />
            <div className="bannerr">
                
            </div>
        </div>
    );
}

export default Transfer;