import expenseReducer from '../../reducers/expenses'

test('should set default values', () => {
    expect(expenseReducer(undefined, {action: '@@INIT'}))
    .toEqual([])
})

test('should set expense values', () => {
    expect(expenseReducer(undefined, { type: 'ADD_EXPENSE', expense: {
        id: '1',
        amount: 100,
        createdAt: 0,
        note: '',
        description: 'Rent'
    }}))
    .toEqual([{
        id: '1',
        amount: 100,
        createdAt: 0,
        note: '',
        description: 'Rent'
    }])
})

