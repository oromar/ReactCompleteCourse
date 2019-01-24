import moment from 'moment'

export const filters = [
    {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    },
    {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    },
    {
        text: 'rent',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
]