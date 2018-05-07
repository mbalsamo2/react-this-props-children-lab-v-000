import React from 'react';
import ReactDOM from 'react-dom';

export default class Invitation extends React.Component {
  render() {
    return (
      <div>
        <h1>You&#x27;ve been invited!</h1>
        {this.props.children}
      </div>
    )
  }
}
