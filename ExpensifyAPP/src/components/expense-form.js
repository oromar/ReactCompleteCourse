import React from 'react'

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            description: '',
            number: 0,
            createdAt: 0,
            note: ''
        }
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
                            />
                        </div>
                        <div>
                            <input 
                                type="number" 
                                placeholder="Amount"
                            />        
                        </div>
                        <div>
                           <textarea 
                                placeholder="Add note for your expense (optional)"
                           >
                           </textarea>
                        </div>
                        <button>Add Expense</button>
                    </form>
                </div>
        )
    }
}