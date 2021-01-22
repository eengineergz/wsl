"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomRegEx = exports.randomIban = exports.randomRgbColor = exports.randomHexColor = exports.randomUrl = exports.randomIPv6 = exports.randomIP = exports.randomEmail = exports.randomPhoneNumber = exports.randomCountryName = exports.randomCountryCode = exports.randomCity = exports.randomStreetAddress = exports.randomName = exports.randomSample = exports.randomUppercaseLettersDigits = exports.randomUppercaseLetters = exports.randomLowercaseLettersDigits = exports.randomLowercaseLetters = exports.randomLettersDigits = exports.randomDigits = exports.randomLetters = exports.randomGuid = exports.randomIntCustomRange = exports.randomLong = exports.randomInt = exports.randomShort = exports.randomByte = exports.resetSeed = void 0;

var _chance = _interopRequireDefault(require("chance"));

var _randexp = _interopRequireDefault(require("randexp"));

var _constants = require("./constants");

var _validations = require("./validations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var chanceInstance = new _chance["default"]();

var resetSeed = function resetSeed(seed) {
  chanceInstance = (0, _validations.isValid)(seed) ? new _chance["default"](seed) : new _chance["default"]();
};

exports.resetSeed = resetSeed;

var randomByte = function randomByte(_ref) {
  var _ref$chance = _ref.chance,
      chance = _ref$chance === void 0 ? chanceInstance : _ref$chance;
  return chance.natural({
    max: 255
  }).toString();
};

exports.randomByte = randomByte;

var randomShort = function randomShort(_ref2) {
  var _ref2$chance = _ref2.chance,
      chance = _ref2$chance === void 0 ? chanceInstance : _ref2$chance;
  return chance.natural({
    max: 65535
  }).toString();
};

exports.randomShort = randomShort;

var randomInt = function randomInt(_ref3) {
  var _ref3$chance = _ref3.chance,
      chance = _ref3$chance === void 0 ? chanceInstance : _ref3$chance;
  return chance.natural({
    max: 4294967295
  }).toString();
};

exports.randomInt = randomInt;

var randomLong = function randomLong(_ref4) {
  var _ref4$chance = _ref4.chance,
      chance = _ref4$chance === void 0 ? chanceInstance : _ref4$chance;
  return chance.natural().toString();
};

exports.randomLong = randomLong;

var randomIntCustomRange = function randomIntCustomRange(_ref5) {
  var _ref5$chance = _ref5.chance,
      chance = _ref5$chance === void 0 ? chanceInstance : _ref5$chance,
      inputValue = _ref5.inputValue;
  var rangeLimits = inputValue.split('-');
  return chance.natural({
    min: +rangeLimits[0],
    max: +rangeLimits[1]
  }).toString();
};

exports.randomIntCustomRange = randomIntCustomRange;

var randomGuid = function randomGuid(_ref6) {
  var _ref6$chance = _ref6.chance,
      chance = _ref6$chance === void 0 ? chanceInstance : _ref6$chance;
  return chance.guid();
};

exports.randomGuid = randomGuid;

var randomLetters = function randomLetters(_ref7) {
  var _ref7$chance = _ref7.chance,
      chance = _ref7$chance === void 0 ? chanceInstance : _ref7$chance,
      _ref7$inputValue = _ref7.inputValue,
      inputValue = _ref7$inputValue === void 0 ? _constants.VALUE_DEFAULT_STRING_LENGTH : _ref7$inputValue;
  return chance.string({
    length: inputValue,
    alpha: true
  });
};

exports.randomLetters = randomLetters;

var randomDigits = function randomDigits(_ref8) {
  var _ref8$chance = _ref8.chance,
      chance = _ref8$chance === void 0 ? chanceInstance : _ref8$chance,
      _ref8$inputValue = _ref8.inputValue,
      inputValue = _ref8$inputValue === void 0 ? _constants.VALUE_DEFAULT_STRING_LENGTH : _ref8$inputValue;
  return chance.string({
    length: inputValue,
    numeric: true
  });
};

exports.randomDigits = randomDigits;

var randomLettersDigits = function randomLettersDigits(_ref9) {
  var _ref9$chance = _ref9.chance,
      chance = _ref9$chance === void 0 ? chanceInstance : _ref9$chance,
      _ref9$inputValue = _ref9.inputValue,
      inputValue = _ref9$inputValue === void 0 ? _constants.VALUE_DEFAULT_STRING_LENGTH : _ref9$inputValue;
  return chance.string({
    length: inputValue,
    alpha: true,
    numeric: true
  });
};

exports.randomLettersDigits = randomLettersDigits;

var randomLowercaseLetters = function randomLowercaseLetters(_ref10) {
  var _ref10$chance = _ref10.chance,
      chance = _ref10$chance === void 0 ? chanceInstance : _ref10$chance,
      _ref10$inputValue = _ref10.inputValue,
      inputValue = _ref10$inputValue === void 0 ? _constants.VALUE_DEFAULT_STRING_LENGTH : _ref10$inputValue;
  return chance.string({
    length: inputValue,
    alpha: true,
    casing: 'lower'
  });
};

exports.randomLowercaseLetters = randomLowercaseLetters;

var randomLowercaseLettersDigits = function randomLowercaseLettersDigits(_ref11) {
  var _ref11$chance = _ref11.chance,
      chance = _ref11$chance === void 0 ? chanceInstance : _ref11$chance,
      _ref11$inputValue = _ref11.inputValue,
      inputValue = _ref11$inputValue === void 0 ? _constants.VALUE_DEFAULT_STRING_LENGTH : _ref11$inputValue;
  return chance.string({
    length: inputValue,
    alpha: true,
    numeric: true,
    casing: 'lower'
  });
};

exports.randomLowercaseLettersDigits = randomLowercaseLettersDigits;

var randomUppercaseLetters = function randomUppercaseLetters(_ref12) {
  var _ref12$chance = _ref12.chance,
      chance = _ref12$chance === void 0 ? chanceInstance : _ref12$chance,
      _ref12$inputValue = _ref12.inputValue,
      inputValue = _ref12$inputValue === void 0 ? _constants.VALUE_DEFAULT_STRING_LENGTH : _ref12$inputValue;
  return chance.string({
    length: inputValue,
    alpha: true,
    casing: 'upper'
  });
};

exports.randomUppercaseLetters = randomUppercaseLetters;

var randomUppercaseLettersDigits = function randomUppercaseLettersDigits(_ref13) {
  var _ref13$chance = _ref13.chance,
      chance = _ref13$chance === void 0 ? chanceInstance : _ref13$chance,
      _ref13$inputValue = _ref13.inputValue,
      inputValue = _ref13$inputValue === void 0 ? _constants.VALUE_DEFAULT_STRING_LENGTH : _ref13$inputValue;
  return chance.string({
    length: inputValue,
    alpha: true,
    numeric: true,
    casing: 'upper'
  });
};

exports.randomUppercaseLettersDigits = randomUppercaseLettersDigits;

var randomSample = function randomSample(_ref14) {
  var _ref14$chance = _ref14.chance,
      chance = _ref14$chance === void 0 ? chanceInstance : _ref14$chance,
      _ref14$inputValue = _ref14.inputValue,
      inputValue = _ref14$inputValue === void 0 ? _constants.VALUE_DEFAULT_SAMPLE_OPTIONS : _ref14$inputValue;
  var sampleSet = inputValue.split(',');
  return sampleSet[chance.natural({
    max: sampleSet.length - 1
  })];
};

exports.randomSample = randomSample;

var randomName = function randomName(_ref15) {
  var _ref15$chance = _ref15.chance,
      chance = _ref15$chance === void 0 ? chanceInstance : _ref15$chance;
  return chance.name();
};

exports.randomName = randomName;

var randomStreetAddress = function randomStreetAddress(_ref16) {
  var _ref16$chance = _ref16.chance,
      chance = _ref16$chance === void 0 ? chanceInstance : _ref16$chance;
  return chance.address();
};

exports.randomStreetAddress = randomStreetAddress;

var randomCity = function randomCity(_ref17) {
  var _ref17$chance = _ref17.chance,
      chance = _ref17$chance === void 0 ? chanceInstance : _ref17$chance;
  return chance.city();
};

exports.randomCity = randomCity;

var randomCountryCode = function randomCountryCode(_ref18) {
  var _ref18$chance = _ref18.chance,
      chance = _ref18$chance === void 0 ? chanceInstance : _ref18$chance;
  return chance.country();
};

exports.randomCountryCode = randomCountryCode;

var randomCountryName = function randomCountryName(_ref19) {
  var _ref19$chance = _ref19.chance,
      chance = _ref19$chance === void 0 ? chanceInstance : _ref19$chance;
  return chance.country({
    full: true
  });
};

exports.randomCountryName = randomCountryName;

var randomPhoneNumber = function randomPhoneNumber(_ref20) {
  var _ref20$chance = _ref20.chance,
      chance = _ref20$chance === void 0 ? chanceInstance : _ref20$chance;
  return chance.phone();
};

exports.randomPhoneNumber = randomPhoneNumber;

var randomEmail = function randomEmail(_ref21) {
  var _ref21$chance = _ref21.chance,
      chance = _ref21$chance === void 0 ? chanceInstance : _ref21$chance;
  return chance.email();
};

exports.randomEmail = randomEmail;

var randomIP = function randomIP(_ref22) {
  var _ref22$chance = _ref22.chance,
      chance = _ref22$chance === void 0 ? chanceInstance : _ref22$chance;
  return chance.ip();
};

exports.randomIP = randomIP;

var randomIPv6 = function randomIPv6(_ref23) {
  var _ref23$chance = _ref23.chance,
      chance = _ref23$chance === void 0 ? chanceInstance : _ref23$chance;
  return chance.ipv6();
};

exports.randomIPv6 = randomIPv6;

var randomUrl = function randomUrl(_ref24) {
  var _ref24$chance = _ref24.chance,
      chance = _ref24$chance === void 0 ? chanceInstance : _ref24$chance;
  return chance.url();
};

exports.randomUrl = randomUrl;

var randomHexColor = function randomHexColor(_ref25) {
  var _ref25$chance = _ref25.chance,
      chance = _ref25$chance === void 0 ? chanceInstance : _ref25$chance;
  return chance.color({
    format: 'hex',
    casing: 'upper'
  });
};

exports.randomHexColor = randomHexColor;

var randomRgbColor = function randomRgbColor(_ref26) {
  var _ref26$chance = _ref26.chance,
      chance = _ref26$chance === void 0 ? chanceInstance : _ref26$chance;
  return chance.color({
    format: 'rgb'
  });
};

exports.randomRgbColor = randomRgbColor;

var randomIban = function randomIban(_ref27) {
  var _ref27$chance = _ref27.chance,
      chance = _ref27$chance === void 0 ? chanceInstance : _ref27$chance;
  return chance.iban();
};

exports.randomIban = randomIban;

var randomRegEx = function randomRegEx(_ref28) {
  var inputValue = _ref28.inputValue;
  return new _randexp["default"](inputValue).gen();
};

exports.randomRegEx = randomRegEx;