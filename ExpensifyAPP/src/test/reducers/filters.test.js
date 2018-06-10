import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should be return filter with default values', () => {
    expect(filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: ''}))
    .toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')  
    })
})

test('should set sortBy amount', () => {
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy date', () => {
    const state = filtersReducer(undefined, {type:'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})

