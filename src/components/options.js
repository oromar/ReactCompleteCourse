import React from 'react'
import Option from './option'

class Options extends React.Component {
    render () {
      const { options, onClick, onOptionRemove } = this.props
      return (
        <div>
          <div>
            <h3>Your Options</h3>
            <button onClick={onClick}>Remove All</button>
          </div>
            {options.map((opt, i) => (
              <Option onClick={onOptionRemove} key={i}>{opt}</Option>
            ))}
        </div>
      )
    }
  }

  export default Options