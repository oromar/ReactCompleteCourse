import uuid from 'uuid'
import store from '../store/configure-store'
import {addExpense, removeExpense, editExpense} from '../actions/expenses'
import {setSortBy} from '../actions/filters'
import getVisibleExpenses from '../selectors/expenses'

console.log(store.getState())

const demoState =  {
    expenses: [{
        id: uuid(),   
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 54500,
        createdAt: 0
    }],    
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'Teste', note: 'teste', amount: 10, createdAt: 10000}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffe', note: '', amount: 8, createdAt: -10000}))

// store.dispatch(setTextFilter('Coffe'))
// store.dispatch(setTextFilter())

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense({id: expenseTwo.expense.id, updates: {amount: 600}}))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())

//store.dispatch(setSortBy('amount'))
store.dispatch(setSortBy())

// store.dispatch(setStartDate(123))
// store.dispatch(setStartDate())

// store.dispatch(setEndDate(123))
// store.dispatch(setEndDate())
