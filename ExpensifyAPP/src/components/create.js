import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './expense-form'
import { addExpense } from '../actions/expenses'

export class CreateExpensePage extends React.Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(expense){
        this.props.onSubmit(expense)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Add Expense</h1>    
                <ExpenseForm 
                    buttonLabel={"Add Expense"}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps= (dispatch) => ({
    onSubmit: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(CreateExpensePage)