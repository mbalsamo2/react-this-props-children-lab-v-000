import React from 'react';
import ReactDOM from 'react-dom'

export default class ThemedDecorations extends React.Component {
  render() {
    const childrenClassName = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return (
      <div className="">
      {childrenClassName}
      </div>
    );
  }
}
