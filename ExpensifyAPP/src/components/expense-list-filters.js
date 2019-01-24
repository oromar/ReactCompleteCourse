import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter, setSortBy, setStartDate, setEndDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'

export class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            focusedInput:null,
        }
        this.onDatesChange = this.onDatesChange.bind(this)
        this.onTextChange = this.onTextChange.bind(this)
        this.onSortChange = this.onSortChange.bind(this)
        this.onFocusChange = this.onFocusChange.bind(this)
    }
    onDatesChange({startDate, endDate}) {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onTextChange(e) {
        this.props.onTextChange(e.target.value)
    }
    onSortChange(e) {
        this.props.onSortChange(e.target.value)
    }
    onFocusChange(focusedInput) {
        this.setState({focusedInput}) 
    }
    render() {
        return (
            <div>
                <input 
                    id="desc" 
                    onChange={this.onTextChange} 
                    type="text" value={this.props.filters.text}
                />        
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}                    
                    onFocusChange={this.onFocusChange}
                    startDateId='start'
                    endDateId='end'
                    focusedInput={this.state.focusedInput}
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                    showClearDates={true}
                />
                <select 
                    id="sort" 
                    onChange={this.onSortChange}
                    value={this.props.filters.sortBy}>
                        <option value='date'>Date</option>
                        <option value='amount'>Amount</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps =(dispatch) => ({
    onTextChange: (text) => dispatch(setTextFilter(text)),
    onSortChange: (sortBy) => dispatch(setSortBy(sortBy)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)