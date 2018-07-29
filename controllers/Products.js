'use strict';

var utils = require('../utils/writer.js');
const ProductModel = require('../mgs-models/product')

module.exports.productsGET = function productsGET (req, res, next) {
  ProductModel.find({}).then(products => {
    utils.writeJson(res, products)
  }).catch((err) => {
    utils.writeJson(err)
  });
};

module.exports.productsPOST = function productsPOST (req, res, next) {
  var product = req.swagger.params['product'].value;
  
  const newProduct = new ProductModel(product);
  newProduct.save().then(() => {
    utils.writeJson(res, newProduct)
  }).catch((err) => {
    utils.writeJson(err)
  });
};

module.exports.productsProductIdDELETE = function productsProductIdDELETE (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  ProductModel.findByIdAndRemove(productId).then(() => {
    utils.writeJson(res, {})
  }).catch((err) => {
    utils.writeJson(res, err)
  });
};

module.exports.productsProductIdGET = function productsProductIdGET (req, res, next) {
  var productId = req.swagger.params['productId'].value;  
  ProductModel.find({ _id: productId }).then(product => {
    if (!product) {
      utils.writeJson(res, {});
    } else {
      utils.writeJson(res, product);
    }
  }).catch((err) => {
    utils.writeJson(res, err);
  });
};
