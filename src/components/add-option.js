import React from 'react'

class AddOption extends React.Component {
    constructor (props) {
      super(props)
      this.addOption = this.addOption.bind(this)
      this.state = {
        error: undefined
      }
    }
  
    addOption (evt) {
      this.setState({error: undefined})
      evt.preventDefault()
      const option = evt.target.elements.option.value.trim()
      const error = this.props.addOption(option)
      if (error) {
        this.setState(() => ({ error: error }))
      }
      evt.target.elements.option.value = ''
    }
  
    render () {
      return (
        <div>
          <form onSubmit={this.addOption}>
            <p>{this.state.error || ''}</p>
            <input type='text' name='option' />
            <button id='btn-add-option'>Add</button>
          </form>
        </div>
      )
    }
  }

  export default AddOption