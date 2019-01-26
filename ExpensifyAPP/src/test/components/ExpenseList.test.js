import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {ExpenseList} from '../../components/expense-list'
import expenses from '../fixtures/expenses'

test('should render expense list correctly', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(toJson(wrapper)).toMatchSnapshot()
})

test('should render expense list with one item', () => {
    const wrapper = shallow(<ExpenseList expenses={[expenses[0]]} />)
    expect(wrapper.find('h1')).toHaveLength(1)
})

test('should render no items found message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(toJson(wrapper)).toMatchSnapshot()
})
