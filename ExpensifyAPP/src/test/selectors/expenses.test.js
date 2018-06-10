import getVisibleExpenses from '../../selectors/expenses'
import moment from 'moment'

const expenses = [{
    id: '1',
    description: 'Gum',
    amount: 1.00,
    note: 'Buble Gum',
    createdAt: moment().startOf('month')
}, {
    id: '2',
    description: 'Gas',
    amount: 123.00,
    note: '',
    createdAt: moment()
}, {
    id: '3',
    description: 'Ren',
    amount: 1000.00,
    note: 'Rent',
    createdAt: moment().endOf('month')
}]

test('should be return all expenses', () => {
    const result = getVisibleExpenses(expenses)
    expect(result).toEqual(expenses)
})

test('should be return Gum expense', () => {
    const result = getVisibleExpenses(expenses, {text: 'Gum'})
    expect(result).toEqual([{
        id: '1',
        description: 'Gum',
        amount: 1.00,
        note: 'Buble Gum',
        createdAt: moment().startOf('month')
    }])
})

test('should be return all expenses filtering by date range', () => {
    const result = getVisibleExpenses(expenses, {startDate: moment().startOf('month'), endDate: moment().endOf('month')})
    expect(result).toEqual(expenses)
})

test('should be empty', () => {
    const result = getVisibleExpenses(expenses, {text: 'qwer'})
    expect(result).toEqual([])
})

test('should sort by date', () => {
    const filters = {
        sortBy: 'date'
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
})


test('should sort by amount', () => {
    const filters = {
        sortBy: 'amount'
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
})
