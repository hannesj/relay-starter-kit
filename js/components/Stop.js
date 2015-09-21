import 'babel/polyfill';
import Route from './Route';
import moment from 'moment';

class Stop extends React.Component {
  showRoutes(routes) {
    return routes.map((route) => <Route route={route}/>)
  }

  render() {
    return (
      <div>
        <h1>{this.props.stop.name}</h1>
        Current time is: {moment().format('HH:mm')}
        {this.showRoutes(this.props.stop.routes)}
      </div>
    );
  }
}

export default Relay.createContainer(Stop, {
  fragments: {
    stop: () => Relay.QL`
      fragment on Stop {
        name
        routes: stoptimesForPatterns(numberOfDepartures: 2){
          ${Route.getFragment('route')}
        }
      }
    `,
  },
});
