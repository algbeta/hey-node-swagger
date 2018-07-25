'use strict';

var utils = require('../utils/writer.js');
var Products = require('../service/ProductsService');

module.exports.productsGET = function productsGET (req, res, next) {
  Products.productsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsPOST = function productsPOST (req, res, next) {
  var product = req.swagger.params['product'].value;
  Products.productsPOST(product)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsProductIdDELETE = function productsProductIdDELETE (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  Products.productsProductIdDELETE(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsProductIdGET = function productsProductIdGET (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  Products.productsProductIdGET(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
