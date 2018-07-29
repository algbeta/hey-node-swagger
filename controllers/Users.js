'use strict';

var utils = require('../utils/writer.js');
const UserModel = require('../mgs-models/user')

module.exports.authPOST = function authPOST (req, res, next) {
  var credentials = req.swagger.params['credentials'].value;

  UserModel.findOne({ login: credentials.login, password: credentials.password }).then(user => {
    if (user && user.id) {
      const payload = { userId: user.id };
     
      utils.writeJson(res, {
        user: {
          name: user.name,
          login: user.login
        }
      });
    } else {
      utils.writeJson(res, {})
    }
  }).catch(err => {
    utils.writeJson(res, err)
  })
};

module.exports.usersGET = function usersGET (req, res, next) {
  UserModel.find({}).then(users => {
    const result = users.map(user => ({
      id: user.id,
      name: user.name,
      login: user.login
    }));
    utils.writeJson(res, {
      result
    });
  }).catch((err) => {
    utils.writeJson(res, err)
  });
};

module.exports.usersUserIdDELETE = function usersUserIdDELETE (req, res, next) {
  var userId = req.swagger.params['userId'].value;  
  UserModel.findByIdAndRemove(userId).then(() => {
    utils.writeJson({})
  }).catch((err) => {
    utils.writeJson(res, err)
  });
};
