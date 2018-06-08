import React from 'react'
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'
import {NavLink} from 'react-router-dom'

const ExpenseListItem = ({id, description, amount, createdAt, dispatch} = {}) => (
    <div>
        <h3><NavLink to={`/edit/${id}`}>{description}</NavLink></h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => dispatch(removeExpense({id}))}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem)