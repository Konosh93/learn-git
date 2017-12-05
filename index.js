var App = React.createClass({
  displayName: 'App',
  render: function() {
    // The second parameter is an object of attributes for the element (if any)
    return React.createElement('div', { }, 'Something something Dark Side');
  }
});
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
);