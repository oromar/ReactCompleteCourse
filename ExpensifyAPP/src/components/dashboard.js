import React from 'react'
import ExpenseList from './expense-list'
import ExpenseListFilters from './expense-list-filters'

export const ExpanseDashboardPage = () => (
    <div>
        <h1>Dashboard</h1>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)