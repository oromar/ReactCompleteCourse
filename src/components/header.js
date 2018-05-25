import React from 'react'

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

export default Header