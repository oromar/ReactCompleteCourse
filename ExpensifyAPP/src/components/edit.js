import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './expense-form'
import {editExpense} from '../actions/expenses'
import {removeExpense} from '../actions/expenses'


const EditExpensePage = (props) => {
    return (
    <div>
        <h1>Edit Expense</h1>
        <ExpenseForm 
            expense={props.expense}
            buttonLabel={"Edit Expense"}
            onSubmit={(expense) => {
                props.dispatch(editExpense({id: props.match.params.id, updates: expense}))
                props.history.push('/')
            }}            
        />
        <button onClick={() => {
            props.dispatch(removeExpense({id: props.match.params.id}))
            props.history.push('/')
        }}>Remove</button>
    </div>
)}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((e) => e.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage)