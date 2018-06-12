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

test('should remove the expense with id', ()=> {
    const currentState = [{
        id: '1',
        description: 'description1',
        note: '',
        createdAt: 0,
        amount: 100.00
    }, {
        id: '2',
        description: 'description2',
        note: '',
        createdAt: 0,
        amount: 50.00
    }, {
        id: '3',
        description: 'description3',
        note: '',
        createdAt: 0,
        amount: 25.00
    }, {
        id: '4',
        description: 'description4',
        note: '',
        createdAt: 0,
        amount: 10.00
    }]
    expect(expenseReducer(currentState, {type: 'REMOVE_EXPENSE', id: '1'}))
    .toEqual([{
        id: '2',
        description: 'description2',
        note: '',
        createdAt: 0,
        amount: 50.00
    }, {
        id: '3',
        description: 'description3',
        note: '',
        createdAt: 0,
        amount: 25.00
    }, {
        id: '4',
        description: 'description4',
        note: '',
        createdAt: 0,
        amount: 10.00
    }])
})

test('should edit the expense', () => {
    const currentState = [{
        id: '1',
        description: 'description1',
        note: '',
        createdAt: 0,
        amount: 100.00
    }, {
        id: '2',
        description: 'description2',
        note: '',
        createdAt: 0,
        amount: 50.00
    }, {
        id: '3',
        description: 'description3',
        note: '',
        createdAt: 0,
        amount: 25.00
    }, {
        id: '4',
        description: 'description4',
        note: '',
        createdAt: 0,
        amount: 10.00
    }]

    expect(expenseReducer(currentState, {type: 'EDIT_EXPENSE', id: '1', updates: {note: 'changed note'}}))
    .toEqual([{
        id: '1',
        description: 'description1',
        note: 'changed note',
        createdAt: 0,
        amount: 100.00
    }, {
        id: '2',
        description: 'description2',
        note: '',
        createdAt: 0,
        amount: 50.00
    }, {
        id: '3',
        description: 'description3',
        note: '',
        createdAt: 0,
        amount: 25.00
    }, {
        id: '4',
        description: 'description4',
        note: '',
        createdAt: 0,
        amount: 10.00
    }]
)
})

