class IndecisionApp extends React.Component {
  
  constructor(props) {
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

  makeDecision() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[randomNum])
  }

  addOption (evt) {
    evt.preventDefault()
    const option = evt.target.elements.option.value
    
    if (option) {
      if (this.state.options.includes(option)) {
        alert('Item already exists')
      } else {
        const options = this.state.options
        options.push(option)
        this.setState({
          options: options
        })
      }      
    }    
    evt.target.elements.option.value = ''
  }

  removeOption(evt) {
    const options = this.state.options
    const updated = options.filter((opt) => opt !==  evt.target.id)
    this.setState({options: updated})
  }

  removeAll(){
    this.setState({options: []})
  }

  render() {
    return <div>
              <Header title={this.state.title} subtitle = {this.state.subtitle}/> 
              <Action disabled={this.state.options.length ===0} onClick={this.makeDecision}>What Should Id Do?</Action>     
              <Options onOptionRemove={this.removeOption} onClick={this.removeAll} options={this.state.options}/> 
              <AddOption onSubmit={this.addOption} />
           </div>
  }
}

class Header extends React.Component {
  
  render () {
    const {title, subtitle} = this.props
    return <div>
              <h1>{title}</h1>
              <p>{subtitle}</p>
           </div>
  }
}

class Action extends React.Component {
  render () {
    const {onClick, children, disabled} = this.props
    return <div> 
              <button disabled={disabled} onClick={onClick}>{children}</button>
           </div>
  }
}

class Options extends React.Component {
  render () {
    const {options, onClick, onOptionRemove} = this.props
    return <div>
            <div>
              <h3>Your Options</h3> 
              <button onClick={onClick}>Remove All</button>
             </div>
              <ol>
                  {options.map((opt, i) => <Option onClick={onOptionRemove} key={i}>{opt}</Option>)}
              </ol>
           </div>
  }
}

class Option extends React.Component {
  render () {
    const {children, onClick} = this.props
    return <div>
              <li key={children}>
                 {children}
                 <button id={children} key={children} onClick={onClick}  style={{border:'none', background:'none'}}>Remove</button>
              </li>              
           </div>
  }
}

class AddOption extends React.Component {
  render () {
    const {onSubmit} = this.props
    return <div>
              <form onSubmit={onSubmit}>
                <input type='text' name='option' />
                <button id='btn-add-option'>Add</button>
              </form>
           </div>
  }
}

const app = document.getElementById('app')

ReactDOM.render(
    <IndecisionApp />, app)