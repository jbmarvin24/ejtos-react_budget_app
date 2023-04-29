import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyField = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleChange = (value) => {
        dispatch({
            type:'CHG_CURRENCY',
            payload: value
        });
    }

    return (
        <div className='alert alert-success'>
            <label htmlFor="currencies">Currency </label>
            <span> (</span>
            <select id="currencies" name="currencies"
            style={{ backgroundColor:'inherit', border: 'none' }}
            value={currency}
            onChange={(e) => handleChange(e.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
            <span>)</span>
        </div>
    );
};
export default CurrencyField;