import React, { useState } from 'react';

import Header from '../components/Header/Header'
import Form from '../components/form/Form'
import './ForOpay.scss'
import Btn from '../components/Btn/Btn'
import ForOpayTransfer from '../components/Modal/ForOpayTransfer';

import { FaUser } from 'react-icons/fa'


const ForOpay = (props) => {
    const [selectedUser, setSelectedUser] = useState(null);


    return (
        <div
            style={{
                height: 'auto'
            }}
        >

            {!selectedUser ?
                <ForOpayTransfer />
                :
                <div className='wrap
            '>


                    <Header transfer='Transfer to Opay Account' />

                    <div className="user">
                        <div className="user__img">
                            <FaUser style={{
                                color: "#fff"
                            }} />
                        </div>

                        <div className="user__details">
                            <div className="user__details--name">
                                <h3>DEBORAH Joy CHIDUBEM</h3>
                            </div>
                            <div className="user__details--number">
                                <h3>912 435 5031</h3>
                            </div>
                        </div>
                    </div>

                    <Form />

                    <Btn />
                </div>}

        </div>
    );
}

export default ForOpay;