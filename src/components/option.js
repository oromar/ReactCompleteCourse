import React from 'react'

class Option extends React.Component {
    render () {
      const { count, children, onClick } = this.props
      return (
        <div className='option'>
            <p className='option__text'>{`${count}. ${children}`}</p>
            <button 
              key={children}
              onClick={(e) => onClick(children)}
              className='button button--link'
            >
              Remove
            </button>        
        </div>
      )
    }
  }
  
export default Option