import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './expense-form'


const EditExpensePage = (props) => {
    return (
    <div>
        <h1>Edit Expense</h1>
        <ExpenseForm 
            expense={props.expense}
            buttonLabel={"Edit Expense"}
            onSubmit={(expense) => {
                console.log('updated')
            }}

        />
    </div>
)}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((e) => e.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage)