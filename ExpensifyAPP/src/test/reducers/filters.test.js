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

test('should set textFilter', () => {
    const state = filtersReducer(undefined, {type:'SET_TEXT_FILTER', text: 'rent'})
    expect(state.text).toBe('rent')
})

test('should set startDate', () => {
    const date = moment()
    const state = filtersReducer(undefined, {type:'SET_START_DATE', startDate: date})
    expect(state.startDate).toBe(date)
})

test('should set endDate', () => {
    const date = moment()
    const state = filtersReducer(undefined, {type:'SET_END_DATE', endDate: date})
    expect(state.endDate).toBe(date)
})


