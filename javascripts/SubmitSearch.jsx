import React from 'react'
import { Router, Link } from 'react-router';

export default class SubmitSearch extends React.Component {
  constructor(props) {
    super(props)
  }

  onClick(e) {
    console.log('fire click!!!!')
    return false;
  }

  render() {
    return (
      <button type="submit" onClick={this.onClick} className="btn btn-default">Sign in</button>
    );
  }
}