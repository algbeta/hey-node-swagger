'use strict';


/**
 * auth endpoint
 *
 * credentials Credentials credentials to login (optional)
 * returns inline_response_200
 **/
exports.authPOST = function(credentials) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user" : {
    "lastModifiedDate" : "2016-08-29T09:12:33.001Z",
    "name" : "Alex",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "login" : "alex"
  },
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YjM5MmY2ODM3YTUwZDViYTQyNzEwNGYiLCJpYXQiOjE1MzIyNjM5NjksImV4cCI6MTUzMjI2NDk2OX0.Mw0A7JJW2dUCbx__9YjpTZWD40EWI_XXPlamxvmKuyY"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get list of users
 *
 * returns List
 **/
exports.usersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lastModifiedDate" : "2016-08-29T09:12:33.001Z",
  "name" : "Alex",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "login" : "alex"
}, {
  "lastModifiedDate" : "2016-08-29T09:12:33.001Z",
  "name" : "Alex",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "login" : "alex"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete user by id
 *
 * userId UUID Id of user to delete
 * no response value expected for this operation
 **/
exports.usersUserIdDELETE = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

