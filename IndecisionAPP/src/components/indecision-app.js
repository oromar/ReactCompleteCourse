import React from 'react'

import Header from './header'
import Action from './action'
import Option from './option'
import Options from './options'
import AddOption from './add-option'
import OptionModal from './option-modal'


class IndecisionApp extends React.Component {
    constructor (props) {
      super(props)
  
      this.state = {
        title: 'Indecision App',
        subtitle: 'Put your life in the hands of a computer',
        options: [],
        selectedOption: undefined
      }
  
      this.makeDecision = this.makeDecision.bind(this)
      this.addOption = this.addOption.bind(this)
      this.removeAll = this.removeAll.bind(this)
      this.removeOption = this.removeOption.bind(this)
      this.closeModal = this.closeModal.bind(this)
    }
  
    componentDidMount() {
      const data = localStorage.getItem('options')
      if (data) {
        this.setState(() => ({options: JSON.parse(data)}))
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) { 
        localStorage.setItem('options', JSON.stringify(this.state.options))
      }
    }
    
    makeDecision () {
      const randomNum = Math.floor(Math.random() * this.state.options.length)
      this.setState({selectedOption: this.state.options[randomNum]})
    }
  
    closeModal(){
        this.setState({selectedOption: undefined})
    }

    addOption (option) {
      if (!option) {
        return 'Enter valid value to add item'
      } else if (this.state.options.includes(option)) {
        return 'Item already exists'
      } else {
        this.setState(prevState => ({options: prevState.options.concat(option)}))
      }
    }
  
    removeOption (option) {
      this.setState((prevState) => ({ options: prevState.options.filter(opt => opt !== option) }))
    }
  
    removeAll () {
      this.setState({ options: [] })
    }
  
    render () {
      return (
        <div>
          <Header title={this.state.title} subtitle={this.state.subtitle} />
          <div className='container'>
            <Action
              disabled={this.state.options.length === 0}
              onClick={this.makeDecision}
            >
              What Should Id Do?
            </Action>
            <div className='widget'>
              <Options
                onOptionRemove={this.removeOption}
                onClick={this.removeAll}
                options={this.state.options}
                />
                <AddOption addOption={this.addOption} />
              </div>
          </div>
          <OptionModal selectedOption={this.state.selectedOption} closeModal={this.closeModal}/>
        </div>
      )
    }
  }

export default IndecisionApp