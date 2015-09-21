import 'babel/polyfill';
import moment from 'moment';

class Route extends React.Component {
  render() {
    return (
      <div>
        {this.props.route.pattern.route.shortName} {this.props.route.pattern.headsign} <br/>
        {this.props.route.stoptimes[0].realtime ? "*" : "~"}{moment((this.props.route.stoptimes[0].serviceDay + this.props.route.stoptimes[0].realtimeDeparture) * 1000).format('HH:mm')} <br/>
        {this.props.route.stoptimes[1].realtime ? "*" : "~"}{moment((this.props.route.stoptimes[1].serviceDay + this.props.route.stoptimes[1].realtimeDeparture) * 1000).format('HH:mm')} <br/>

      </div>
    )
  }
};

export default Relay.createContainer(Route, {
  fragments: {
    route: () => Relay.QL`
      fragment on StoptimesInPattern {
        pattern{
          route{
            id
            shortName
          }
        headsign
        }
        stoptimes{
          realtimeDeparture
          realtime
          serviceDay
        }
      }
    `,
  },
});
