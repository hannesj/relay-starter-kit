import 'babel/polyfill';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.stop.name}</h1>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    stop: () => Relay.QL`
      fragment on Stop {
        name
      }
    `,
  },
});
