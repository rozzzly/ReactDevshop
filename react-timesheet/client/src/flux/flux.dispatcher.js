var Dispatcher = require('flux').Dispatcher;
var _ = require('lodash');

var dispatcher = _.extend(new Dispatcher(), {

  /**
   * A bridge function between the views and the dispatcher, marking the action
   * as a view action.  Another variant here could be handleServerAction.
   * @param  {object} action The data coming from the view.
   */

   // TODO - replace with actual implementation
   handleViewAction: _.noop
});

module.exports = dispatcher;
