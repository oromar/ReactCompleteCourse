import {setTextFilter, setSortBy, setStartDate, setEndDate} 
from '../../actions/filters'

test('should be setup text filter with value', () => {
    expect(setTextFilter('test')).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    })
})

test('should be setup text filter with default value', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should be setup sort filter by date', () => {
    expect(setSortBy('date')).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should be setup sort filter by amount', () => {
    expect(setSortBy('amount')).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should be setup sort filter by date (default)', () => {
    expect(setSortBy()).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should be setup start date', () => {
   expect(setStartDate(new Date())).toEqual({
       type: 'SET_START_DATE',
       startDate: expect.any(Date)
   })
})

test('should be setup end date', () => {
    expect(setEndDate(new Date())).toEqual({
        type: 'SET_END_DATE',
        endDate: expect.any(Date)
    })
 })

 test('should be setup start date specific date', () => {
    const date = new Date()
    expect(setStartDate(date)).toEqual({
        type: 'SET_START_DATE',
        startDate: date
    })
 })
 
 test('should be setup end date', () => {
     const date = new Date()
     expect(setEndDate(date)).toEqual({
         type: 'SET_END_DATE',
         endDate: date
     })
  })
