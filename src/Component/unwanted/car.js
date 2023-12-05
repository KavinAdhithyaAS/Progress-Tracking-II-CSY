import React, { Component } from 'react'
import { ReactDOM } from 'react'
export default class car extends Component {
  render() {
    return <h2>I had a {this.props.car} car!</h2>
  }
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<car name="Jaguar/>")
