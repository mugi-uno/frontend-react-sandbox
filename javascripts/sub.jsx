import React from 'react'
import MessageList from 'MessageList'

export default class Sub extends React.Component {
  constructor(props) {
    super(props)

    this.messages = [
      {id: 1, text: "message no 1"},
      {id: 2, text: "message no 2"},
    ]
  }

  render() {
    return (
      <div>
        <p>This message from Component of 'Sub'</p>
        <hr />
        <MessageList messages={this.messages} />
      </div>
    );
  }
}