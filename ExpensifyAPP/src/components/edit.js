import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './expense-form'
import {editExpense} from '../actions/expenses'
import {removeExpense} from '../actions/expenses'

export class EditExpensePage extends React.Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    onSubmit(id, expense) {
        this.props.onSubmit(id, expense)
        this.props.history.push('/')
    }
    onClick(id) {
        this.props.onClick(id)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm 
                    expense={this.props.expense}
                    buttonLabel={"Edit Expense"}
                    onSubmit={this.onSubmit}            
                />
                <button onClick={this.onClick}>Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((e) => e.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: ({id, expense}) => dispatch(editExpense({id, updates: expense})),
        onClick: (id) => dispatch(removeExpense({id}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)