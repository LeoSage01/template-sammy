import React from 'react';

import './Header.scss'
import { useLocation, useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();

    return (
        <header>
            <span onClick={() => navigate(-1)} className="material-symbols-outlined" style={{ fontWeight: 'bolder' }}>
                chevron_left
            </span>
            <h3 
             style={{
                marginTop: '25px'
             }}
            className="container">{props.transfer}</h3>
            <div className="link">
                <h4>{props.history}</h4>
            </div>

        </header>
    );
}

export default Header;