import React from 'react'
import {shallow} from 'enzyme'
import {EditExpensePage} from '../../components/edit'
import toJson from 'enzyme-to-json'
import ExpenseForm from '../../components/expense-form'
import expenses from '../fixtures/expenses'

let editExpense, onClick, wrapper, history

beforeEach(() => {
    editExpense = jest.fn()
    onClick = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<EditExpensePage 
        onSubmit={editExpense} 
        onClick = {onClick} history={history}/>)
})

test('should render expense page correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
})

test('should handle editExpense', () => {
    const id = expenses[0].id
    const data =expenses[0]
    delete data.id
    wrapper.find(ExpenseForm).prop('onSubmit')(id, data)
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(id, data)
})

test('should handle removeExpense', () => {
    const id = expenses[0].id
    wrapper.find('button').prop('onClick')(id)
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(onClick).toHaveBeenLastCalledWith(id)
})