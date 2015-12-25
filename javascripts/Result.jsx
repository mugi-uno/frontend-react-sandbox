import React from 'react'
import { Transition } from 'react-router'

export default class Result extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <b>RESULT!!!</b>
        </div>
      </div>
    );
  }
}