/**
 * LocationController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to LocationController)
   */
  _config: {},

    create: function (req, res) {
        Location.create(req.body, function (err, data) {
            if (err) {
                res.send(400, err);
            } else {
                res.send(data)
            }
        })
    },

    find: function (req, res) {
        var params = {};
        Utils.addIfExists(params, 'email', req.param('email'));
        Utils.addIfExists(params, 'geoHash', req.param('geoHash'));
        Location.find(params, function (err, data) {
            if (err) {
                res.send(400, err);
            } else {
                res.send(data)
            }
        })
    }

  
};
