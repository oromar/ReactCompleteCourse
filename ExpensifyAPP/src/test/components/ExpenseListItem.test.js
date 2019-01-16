import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import ExpenseListItem from '../../components/expense-list-item'
import expenses from '../fixtures/expenses'

test('should render expense list item correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(toJson(wrapper)).toMatchSnapshot()
})