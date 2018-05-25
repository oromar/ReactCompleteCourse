import React from 'react'

class Option extends React.Component {
    render () {
      const { children, onClick } = this.props
      return (
        <div>
            {children}
            <button
              key={children}
              onClick={(e) => onClick(children)}
              style={{ border: 'none', background: 'none' }}
            >
              Remove
            </button>        
        </div>
      )
    }
  }
  
export default Option