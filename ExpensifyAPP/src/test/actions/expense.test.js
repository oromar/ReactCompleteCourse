import {addExpense, removeExpense, editExpense} from '../../actions/expenses'

test('should be setup remove  expense object', () => {
    const action = removeExpense({id: '123@abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123@abc'
    })
})

test('should be setup edit expense object', () => {
    const action = editExpense({
        id: '1234@abc',
        updates: {note: 'New Note'}
    })
    expect(action).toEqual({
        id: '1234@abc',
        type: 'EDIT_EXPENSE',
        updates: {note: 'New Note'}
    })
})

test('should be setup addExpense object', () => {
    const action = addExpense({
        description: 'description',
        amount: 100.00,
        createdAt: 0,
        note: 'note'
    })
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: 'description',
            note: 'note',
            createdAt: 0,
            amount: 100.00,
            id: expect.any(String)
        }
    })
})

test('should be setup addExpense object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            createdAt: 0,
            amount: 0,
            id: expect.any(String)
        }
    })
})