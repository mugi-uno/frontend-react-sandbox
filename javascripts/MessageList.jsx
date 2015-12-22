import React from 'react'

export default class MessageList extends React.Component {
  render() {
    let text = this.props.messages.map((message) => {
      return (<div>{message.id}:{message.text}</div>)
    });

    return (
      <div>{text}</div>
    )
  }
}