import React, { Component } from 'react'
import loading from './spinner.gif'
export class Loader extends Component {
  render() {
    return (
      <div className="text-center" >  <img className="imgH" src={loading}></img></div>
    )
  }
}

export default Loader