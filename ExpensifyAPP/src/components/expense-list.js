import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './expense-list-item'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((e) => 
        <ExpenseListItem key={e.id} 
            {...e} 
            />)}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
