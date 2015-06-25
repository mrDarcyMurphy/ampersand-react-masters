var React = require('react');

var Hello = React.createClass({
  render: function render () {
    return <div>Hello, {this.props.name}</div>
  }
})

React.render(<Hello name="Darcy" />, document.body)
