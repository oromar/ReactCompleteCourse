import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/app-router'
import configureStore from './store/configure-store'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
  
const store = configureStore()

store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt: 10000}))
store.dispatch(addExpense({description: 'Gas bill', amount: 1000, createdAt: 12000}))
store.dispatch(addExpense({description: 'Rent', amount: 3800, createdAt: 1000}))

const app = document.getElementById('app')

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
)
ReactDOM.render(jsx, app)
  