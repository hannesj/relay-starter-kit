export default class extends Relay.Route {
  static queries = {
    stop: () => Relay.QL`
      query {
        stop(id: $stopId)
      }
    `,
  };
  static paramDefinitions = {
    stopId: {required: true},
  }
  static routeName = 'StopRoute';
}
