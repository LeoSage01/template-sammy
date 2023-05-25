import React from 'react';
import './Form.scss'


const Form = (props) => {

    return (
        <div className='Form'>
            <form>
                <label > 
                    <h4>Amount</h4>
                    <input
                     type="number" placeholder='₦10.00 - 5,000,000.00' required /> 
                </label>
                <label>
                    <h4>Remark</h4>
                    <input type="text" placeholder="What's this for? (Optional)"  />
                </label>
            </form>
        </div>
    );
}

export default Form;