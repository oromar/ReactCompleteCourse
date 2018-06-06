import React from 'react'

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }

        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onAmountChange = this.onAmountChange.bind(this)
        this.onNoteChange= this.onNoteChange.bind(this)
    }

    onDescriptionChange(e) {
        const description = e.target.value
        this.setState(({description}))
    }   

    onAmountChange(e) {
        const amount = e.target.value
        this.setState(({amount}))
    }

    onNoteChange(e) {
        const note = e.target.value
        this.setState(({note}))
    }

    render() {
        return (
                <div>
                    <form>
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
                                type="number" 
                                placeholder="Amount"
                                value={this.state.amount}
                                onChange={this.onAmountChange}
                                
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
                        <button>Add Expense</button>
                    </form>
                </div>
        )
    }
}