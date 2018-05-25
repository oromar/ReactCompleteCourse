import React from 'react'
import Option from './option'

class Options extends React.Component {
    render () {
      const { options, onClick, onOptionRemove } = this.props
      return (
        <div>
          <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button className='button button--link' onClick={onClick}>Remove All</button>
          </div>
          {options.length === 0 && <p className='widget widget-message'>Please add an option to get started!</p>}
            {options.map((opt, i) => (
              <Option onClick={onOptionRemove} count={i + 1} key={i}>{opt}</Option>
            ))}
        </div>
      )
    }
  }

  export default Options