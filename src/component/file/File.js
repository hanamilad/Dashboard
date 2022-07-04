import React, { Component } from 'react'
import './file.css';

export default class File extends Component {

  render() {
    return (
        <tr>
        <th scope="row">
      <input type={"checkbox"} />
      <span>{this.props.id}</span>
        </th>
        <td>{this.props.name}</td>
        <td>${this.props.price}</td>
        <td>{this.props.date}</td>
      </tr>
    )
  }
}

