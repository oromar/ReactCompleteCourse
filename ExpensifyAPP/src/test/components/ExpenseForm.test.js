import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import ExpenseForm from '../../components/expense-form'
import expenses from '../fixtures/expenses'

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
})

test('should render Expense From with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
})

test('should render erro for invalid submission', () => {
    const expense = {...expenses[0]}
    delete expense.amount
    const wrapper = shallow(<ExpenseForm expense={expense}/>)
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {

        }
    })
    expect(wrapper.state('error')).toBeDefined()
    expect(wrapper.state('error')).toEqual('Please provide description and amount.')
    expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
    const value  = 'New Description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        } 
    })
    expect(wrapper.state('description')).toEqual(value)
})

test('should set note on textarea change', () => {
    const value  = 'New Expense note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').at(0).simulate('change', {
        target: {
            value
        } 
    })

    expect(wrapper.state('note')).toEqual(value)
})

test('should not set amount if invalid  input', () => {
    const value  = '-100'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        } 
    })

    expect(wrapper.state('amount')).toEqual('')
})

test('should set amount if valid  input', () => {
    const value  = '100'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        } 
    })

    expect(wrapper.state('amount')).toEqual(value)
})




