export default class extends Relay.Route {
  static queries = {
    stop: () => Relay.QL`
      query {
        stop(id: "HSL:2222222")
      }
    `,
  };
  static routeName = 'StopRoute';
}
