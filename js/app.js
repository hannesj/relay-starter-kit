import App from './components/App';
import AppHomeRoute from './routes/AppHomeRoute';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer("http://matka.hsl.fi/otp/routers/default/index/graphql")
);

ReactDOM.render(
  <Relay.RootContainer
    Component={App}
    route={new AppHomeRoute()}
  />,
  document.getElementById('root')
);
