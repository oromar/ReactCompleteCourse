import React from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props)
        const {description, amount, createdAt, note} = props.expense || {}
        this.state = {
            description: description || '',
            amount: amount && (amount/100).toString() || '',
            createdAt: (createdAt && moment(createdAt)) || moment(),
            note: note || '',
            calendarFocused: false,
            error: ''
        }

        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onAmountChange = this.onAmountChange.bind(this)
        this.onNoteChange= this.onNoteChange.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
        this.onFocusChange = this.onFocusChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onDescriptionChange(e) {
        const description = e.target.value
        this.setState(({description}))
    }   

    onAmountChange(e) {
        const amount = e.target.value
        const regex = /^\d+(\.\d{0,2})?$/
        if (!amount || amount.match(regex)) {
            this.setState(({amount}))
        }
    }

    onNoteChange(e) {
        const note = e.target.value
        this.setState(({note}))
    }

    onDateChange(createdAt) {
        if (createdAt) {
            this.setState(({createdAt}))
        }
    }

    onFocusChange({focused}) {
        this.setState({calendarFocused: focused})
    }

    onSubmit(e) {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState({error: 'Please provide description and amount.'})
        } else {
            this.setState({error: ''})
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }

    render() {
        return (
                <div>
                    {this.state.error && <p>{this.state.error}</p>}
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Description" 
                                autoFocus
                                value={this.state.description}
                                onChange={this.onDescriptionChange}
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Amount"
                                value={this.state.amount}
                                onChange={this.onAmountChange}
                                
                            />        
                        </div>
                        <div>
                            <SingleDatePicker 
                                date={this.state.createdAt}
                                onDateChange={this.onDateChange}
                                focused={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                        </div>
                        <div>
                           <textarea 
                                placeholder="Add note for your expense (optional)"
                                onChange={this.onNoteChange}
                                value={this.state.note}
                           >
                           </textarea>
                        </div>
                        <button type="submit">{this.props.buttonLabel}</button>
                    </form>
                </div>
        )
    }
}