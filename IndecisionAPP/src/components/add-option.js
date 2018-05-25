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
            <p className='error-message'>{this.state.error || ''}</p>
            <div className='add-option'>
                <input type='text' name='option' placeholder='Type an option here' />
                <button className='button' id='btn-add-option'>Add Option</button>
            </div>
          </form>
        </div>
      )
    }
  }

  export default AddOption