import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    const handleBudgetChange = (value) => {
        if (value > 20_000) {
            alert("Budget must be less than or equal to 20,000.")
            return;
        }

        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);

        if(value < totalExpenses) {
            alert("Budget must be more than or equal to total spent.")
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" value={budget} step={10} onChange={(e) => handleBudgetChange(e.target.value)} />
        </div>
    );
};
export default Budget;