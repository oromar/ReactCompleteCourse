import React from 'react'

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

export default Action