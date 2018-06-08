import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './expense-form'
import { addExpense } from '../actions/expenses'

const CreateExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>    
        <ExpenseForm 
            buttonLabel={"Add Expense"}
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense))
                props.history.push('/')
            }}
        />
    </div>
)

export default connect()(CreateExpensePage)