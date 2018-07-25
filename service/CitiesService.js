'use strict';


/**
 * delete city by id
 *
 * cityId UUID Id of city to delete
 * no response value expected for this operation
 **/
exports.citiesCityIdDELETE = function(cityId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get city info by id
 *
 * cityId UUID Id of city to return
 * returns City
 **/
exports.citiesCityIdGET = function(cityId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "Belarus",
  "capital" : true,
  "lastModifiedDate" : "2016-08-29T09:12:33.001Z",
  "name" : "Minsk",
  "location" : {
    "lat" : 53.9,
    "long" : 27.56667
  },
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * modify city data by id
 *
 * cityId UUID Id of city to modify
 * returns City
 **/
exports.citiesCityIdPUT = function(cityId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "Belarus",
  "capital" : true,
  "lastModifiedDate" : "2016-08-29T09:12:33.001Z",
  "name" : "Minsk",
  "location" : {
    "lat" : 53.9,
    "long" : 27.56667
  },
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List of all available cities
 *
 * returns List
 **/
exports.citiesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : "Belarus",
  "capital" : true,
  "lastModifiedDate" : "2016-08-29T09:12:33.001Z",
  "name" : "Minsk",
  "location" : {
    "lat" : 53.9,
    "long" : 27.56667
  },
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
}, {
  "country" : "Belarus",
  "capital" : true,
  "lastModifiedDate" : "2016-08-29T09:12:33.001Z",
  "name" : "Minsk",
  "location" : {
    "lat" : 53.9,
    "long" : 27.56667
  },
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds new city
 *
 * city City city to add (optional)
 * no response value expected for this operation
 **/
exports.citiesPOST = function(city) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

