import React from 'react'
import {NavLink} from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = ({id, description, amount, createdAt } = {}) => (
    <div>
        <h3><NavLink to={`/edit/${id}`}>{description}</NavLink></h3>
        <p>{amount} - {moment(createdAt).format('MMM Do YYYY')}</p>
        
    </div>
)

export default (ExpenseListItem)