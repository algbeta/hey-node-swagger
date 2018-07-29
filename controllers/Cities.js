'use strict';
const CityModel = require('../mgs-models/city');
var utils = require('../utils/writer.js');

module.exports.citiesCityIdDELETE = function citiesCityIdDELETE (req, res, next) {
  var cityId = req.swagger.params['cityId'].value;
  CityModel.findByIdAndRemove(cityId).then(() => {
    utils.writeJson(res, {})  
  }).catch((err) => {
    utils.writeJson(res, err)
  });
};

module.exports.citiesCityIdGET = function citiesCityIdGET (req, res, next) {
  var cityId = req.swagger.params['cityId'].value;
  CityModel.findById(cityId).then(city => {
    if (!city) {
      utils.writeJson(res, {});
    } else {
      utils.writeJson(res, city);
    }
    }).catch(err => {
      utils.writeJson(res, err)
    })
};

module.exports.citiesCityIdPUT = function citiesCityIdPUT (req, res, next) {
  const cityId = req.swagger.params['cityId'].value;
  const city = req.swagger.params['city'].value;

  CityModel.findByIdAndUpdate(cityId, {
    $setOnInsert: {
      name: city.name,
      capital: city.capital,
      country: city.country,
      lastModifiedDate: Date.now()
    }
  }, {
    upsert: true,
    new: true,
    runValidators: true,
    setDefaultsOnInsert: true
  }, (err, result) => {
    utils.writeJson(res, err)
  }).catch(err => {
    utils.writeJson(res, err)
  });
};

module.exports.citiesGET = function citiesGET (req, res, next) {
  CityModel.find({}).then(response => {
    utils.writeJson(res, response)
  }).catch(function (response) {
    utils.writeJson(res, response);
  });
};

module.exports.citiesPOST = function citiesPOST (req, res, next) {
  var city = req.swagger.params['city'].value;
  const newCity = new CityModel(city);
  newCity.save().then(() => {
    utils.writeJson(res, newCity)
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};
