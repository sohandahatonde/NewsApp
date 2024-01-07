import React, { Component } from 'react'
import Loading from './Loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className="my-4" src={Loading} alt="loading" />
      </div>
    )
  }
}
