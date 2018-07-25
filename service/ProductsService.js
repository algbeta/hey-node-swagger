'use strict';


/**
 * List of all available products
 *
 * returns List
 **/
exports.productsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lastModifiedDate" : "2016-08-29T09:12:33.001Z",
  "name" : "sugar",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "type" : "brown"
}, {
  "lastModifiedDate" : "2016-08-29T09:12:33.001Z",
  "name" : "sugar",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "type" : "brown"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create new product
 *
 * product Product product to add (optional)
 * no response value expected for this operation
 **/
exports.productsPOST = function(product) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete product by id
 *
 * productId UUID Id of product to delete
 * no response value expected for this operation
 **/
exports.productsProductIdDELETE = function(productId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get product info by id
 *
 * productId UUID Id of product to return
 * returns Product
 **/
exports.productsProductIdGET = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastModifiedDate" : "2016-08-29T09:12:33.001Z",
  "name" : "sugar",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "type" : "brown"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

