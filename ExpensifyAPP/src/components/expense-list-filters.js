import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter, setSortBy} from '../actions/filters'


const ExpenseListFilters = (props) => (
    <div>
        <input 
            id="desc" 
            onChange={(e) => {props.dispatch(setTextFilter(e.target.value))}} 
            type="text" value={props.filters.text}
        />        
        <select 
            id="sort" 
            onChange={(e) => {props.dispatch(setSortBy(e.target.value))}}
            value={props.filters.sortBy}
        >
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)