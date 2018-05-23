class IndecisionApp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer',
      options: ['One', 'Two']
    }

    this.makeDecision = this.makeDecision.bind(this)
    this.addOption = this.addOption.bind(this)
    this.removeAll = this.removeAll.bind(this)
    this.removeOption = this.removeOption.bind(this)
  }

  makeDecision () {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[randomNum])
  }

  addOption (option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.includes(option)) {
      return 'Item already exists'
    } else {
      this.setState(prevState => {
        return {
          options: prevState.options.concat(option)
        }
      })
    }
  }

  removeOption (evt) {
    const options = this.state.options
    const updated = options.filter(opt => opt !== evt.target.id)
    this.setState({ options: updated })
  }

  removeAll () {
    this.setState({ options: [] })
  }

  render () {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <Action
          disabled={this.state.options.length === 0}
          onClick={this.makeDecision}
        >
          What Should Id Do?
        </Action>
        <Options
          onOptionRemove={this.removeOption}
          onClick={this.removeAll}
          options={this.state.options}
        />
        <AddOption addOption={this.addOption} />
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    const { title, subtitle } = this.props
    return (
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    )
  }
}

class Action extends React.Component {
  render () {
    const { onClick, children, disabled } = this.props
    return (
      <div>
        <button disabled={disabled} onClick={onClick}>{children}</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render () {
    const { options, onClick, onOptionRemove } = this.props
    return (
      <div>
        <div>
          <h3>Your Options</h3>
          <button onClick={onClick}>Remove All</button>
        </div>
        <ul>
          {options.map((opt, i) => (
            <Option onClick={onOptionRemove} key={i}>{opt}</Option>
          ))}
        </ul>
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    const { children, onClick } = this.props
    return (
      <div>
        <li key={children}>
          {children}
          <button
            id={children}
            key={children}
            onClick={onClick}
            style={{ border: 'none', background: 'none' }}
          >
            Remove
          </button>
        </li>
      </div>
    )
  }
}

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
      this.setState({ error: error })
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

const app = document.getElementById('app')

ReactDOM.render(<IndecisionApp />, app)
