import React, { useState } from 'react';
import Header from '../components/Header/Header'
import { RiBankFill } from 'react-icons/ri'
import { FaGreaterThan } from 'react-icons/fa'
import Beneficiary from '../components/Beneficiary/Beneficiary';
import './OtherBanks.scss'
import Modal from '../components/Modal/Modal';

function ForTransfer() {
    const [selectedBank, setSelectedBank] = useState(null);

    return (
        <div className='otherBanks'>

            {!selectedBank ? <div>

            <Header transfer='Transfer To Bank Account'
             history='History' 
             />

                <div className="contain">
                <h3>Recipient Bank</h3>
                <div className="bankk"
                >
                    <div className="bankk__logo">
                        <RiBankFill />                 
                    </div>
                    <div className="bankk__text">
                        <h4>
                            Select Bank
                        </h4>
                    </div>
                    <div className="bankk__icon">
                        <FaGreaterThan />
                    </div>
                </div>

                
                <Beneficiary />

                </div>
            </div> : 

            <Modal/>
            }

        </div>
    );
}

export default ForTransfer;