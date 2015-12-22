import React from 'react'
import Sub from 'sub'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>This message from 'Main'.</p>
        <Sub />
      </div>
    );
  }
}