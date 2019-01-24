import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {ExpenseListFilters} from '../../components/expense-list-filters'
import {filters} from '../fixtures/filters'
import {DateRangePicker} from 'react-dates'
import moment from 'moment'

let onTextChange, onSortChange, setStartDate, setEndDate, wrapper

beforeEach(() => {
    const filter = filters[0]
    onTextChange = jest.fn()
    onSortChange = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters 
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        onSortChange={onSortChange}
        onTextChange={onTextChange}
        filters={filter} />)
})

test('should render ExpenseListFilters correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
})

test('should render ExpenseListFilters correctly with filters', () => {
    wrapper.setProps({filters: {...filters[1]}})
    expect(toJson(wrapper)).toMatchSnapshot()
})

test('should handle onTextChange', () => {
    const value = 'New Value'
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    })
    expect(onTextChange).toHaveBeenCalled()
    expect(onTextChange).toHaveBeenCalledWith(value)
})

test('should handle onSortChange', () => {
    const value = 'SORT_BY_AMOUNT'
    wrapper.find('select').at(0).simulate('change', {
        target: {
            value
        }
    })
    expect(onSortChange).toHaveBeenCalled()
    expect(onSortChange).toHaveBeenCalledWith(value)
})

test('should handle onSortChange by date', () => {
    const value = 'SORT_BY_DATE'
    wrapper.find('select').at(0).simulate('change', {
        target: {
            value
        }
    })
    expect(onSortChange).toHaveBeenCalled()
    expect(onSortChange).toHaveBeenCalledWith(value)
})

test('should handle onDateChange', () => {
    const value = moment(0)
    wrapper.find(DateRangePicker).prop('onDatesChange')({startDate: value, endDate:value})
    expect(setStartDate).toHaveBeenLastCalledWith(value)
    expect(setEndDate).toHaveBeenLastCalledWith(value)
})

test('should handle onFocusChange', () => {
    const calendarFocused = 'endDate'
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('focusedInput')).toEqual(calendarFocused)
})