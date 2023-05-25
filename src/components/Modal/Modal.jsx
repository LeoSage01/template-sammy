import React from 'react';
import './Modal.scss'

import Btn from '../Btn/Btn';
import Form from '../form/Form';
import Header from '../Header/Header';


import { FaGreaterThan, FaUser } from 'react-icons/fa'
import { RiBankFill } from 'react-icons/ri'


function Modal() {

    return (
        <div className='modal'>
            <Header transfer='Transfer To Bank Account'
             />

            <div className="contain">

                <div className="banner">
                    <h4>No Transaction Fees</h4>
                </div> 

                <h4>Bank</h4>
                <div className="bank">
                    <div className="bank__logo">
                        <RiBankFill />                 
                    </div>
                    <div className="bank__text">
                        <h4>
                            First Bank Of Nigeria
                        </h4>
                    </div>
                    <div className="bank__icon">
                        <FaGreaterThan />
                    </div>
                </div>
            
                <div className="account">
                    <h4>Account Number</h4>    
                    <form>
                                <input
                                type="number" placeholder='10 digits' required /> 
                            
                            <div className="account__logo">
                                <div className="account__logo--img">
                                    <FaUser color='green'/>
                                </div>
                        </div>
                    </form>
                </div>

                <Form />

                <Btn />

                

            </div>    
        </div>
    );
}

export default Modal;