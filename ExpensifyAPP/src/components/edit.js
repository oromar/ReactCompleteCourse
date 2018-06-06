import React from 'react'

export const EditExpensePage = (props) => (
    <div>
        <h1>Edit Expense</h1>
        <p>Editing expense with id {props.match.params.id}</p>
    </div>
)