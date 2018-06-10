import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter, setSortBy, setStartDate, setEndDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'
import moment from 'moment'

class ExpenseListFilters extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            focusedInput:null,
        }
        this.onDatesChange = this.onDatesChange.bind(this)
    }

    onDatesChange({startDate, endDate}) {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    render() {
        return (
            <div>
                <input 
                    id="desc" 
                    onChange={(e) => {this.props.dispatch(setTextFilter(e.target.value))}} 
                    type="text" value={this.props.filters.text}
                />        
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}                    
                    onFocusChange={(focusedInput)=>this.setState(({focusedInput}))}
                    startDateId='start'
                    endDateId='end'
                    focusedInput={this.state.focusedInput}
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                    showClearDates={true}
                />
                <select 
                    id="sort" 
                    onChange={(e) => {this.props.dispatch(setSortBy(e.target.value))}}
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

export default connect(mapStateToProps)(ExpenseListFilters)