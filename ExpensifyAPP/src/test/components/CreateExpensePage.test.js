import React from 'react'
import {shallow} from 'enzyme'
import {CreateExpensePage} from '../../components/create'
import toJson from 'enzyme-to-json'
import ExpenseForm from '../../components/expense-form'
import expenses from '../fixtures/expenses'

let createExpense, history, wrapper

beforeEach(() => {
    createExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper  = shallow(<CreateExpensePage onSubmit={createExpense} history = {history}/>)
})

test('should render expense page correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(createExpense).toHaveBeenLastCalledWith(expenses[1])
}) 