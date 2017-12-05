var App = React.createClass({
  displayName: 'App',
  render: function() {
    // The second parameter is an object of attributes for the element (if any)
    return <Poems />;
  }
});

var Poems = React.createClass({
	displayName: 'Poems',
	render: function () {
		return <div> Poems - <a href="http://www.poetrybyheart.org.uk/poems/tell-me-not-here-it-needs-not-saying/">Tell me not here</a></div>
	}
})
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
);