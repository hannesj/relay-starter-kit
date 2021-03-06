import Stop from './components/Stop';
import StopRoute from './routes/StopRoute';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer("http://matka.hsl.fi/otp/routers/default/index/graphql")
);

ReactDOM.render(
  <Relay.RootContainer
    Component={Stop}
    route={new StopRoute({stopId: location.search.substr(1)})}
  />,
  document.getElementById('root')
);
