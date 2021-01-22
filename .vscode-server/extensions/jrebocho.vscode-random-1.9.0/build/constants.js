"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VALUE_DEFAULT_SAMPLE_OPTIONS = exports.VALUE_DEFAULT_STRING_LENGTH = exports.MSG_ENTER_REGEX_ERROR = exports.MSG_ENTER_REGEX = exports.MSG_INPUT_VALUE_MUST_BE_VALID_RANGE = exports.MSG_INTEGER_RANGE_FORMAT = exports.MSG_ENTER_INTEGER_RANGE = exports.MSG_SEED_RESET_ERROR = exports.MSG_SEED_RESET = exports.MSG_LEAVE_EMPTY_FOR_DEFAULT = exports.MSG_ENTER_SEED = exports.MSG_INPUT_VALUE_MUST_CONTAIN_COMMA = exports.MSG_INPUT_VALUE_MUST_BE_NUMBER = exports.MSG_ENTER_SAMPLE_INPUT = exports.MSG_ENTER_STRING_LENGTH = exports.MSG_NO_ACTIVE_TEXT_EDITOR = exports.CMD_KEY_RANDOM_REGEX = exports.CMD_KEY_RANDOM_IBAN = exports.CMD_KEY_RANDOM_RGB_COLOR = exports.CMD_KEY_RANDOM_HEX_COLOR = exports.CMD_KEY_RANDOM_URL = exports.CMD_KEY_RANDOM_IP_V6 = exports.CMD_KEY_RANDOM_IP = exports.CMD_KEY_RANDOM_EMAIL = exports.CMD_KEY_RANDOM_PHONE_NUMBER = exports.CMD_KEY_RANDOM_COUNTRY_NAME = exports.CMD_KEY_RANDOM_COUNTRY_CODE = exports.CMD_KEY_RANDOM_CITY = exports.CMD_KEY_RANDOM_STREET_ADDRESS = exports.CMD_KEY_RANDOM_NAME = exports.CMD_KEY_RANDOM_SAMPLE_FROM_INPUT = exports.CMD_KEY_RANDOM_UPPERCASE_LETTERS_DIGITS_CUSTOM_LENGTH = exports.CMD_KEY_RANDOM_UPPERCASE_LETTERS_CUSTOM_LENGTH = exports.CMD_KEY_RANDOM_LOWERCASE_LETTERS_DIGITS_CUSTOM_LENGTH = exports.CMD_KEY_RANDOM_LOWERCASE_LETTERS_CUSTOM_LENGTH = exports.CMD_KEY_RANDOM_LETTERS_DIGITS_CUSTOM_LENGTH = exports.CMD_KEY_RANDOM_DIGITS_CUSTOM_LENGTH = exports.CMD_KEY_RANDOM_LETTERS_CUSTOM_LENGTH = exports.CMD_KEY_RANDOM_GUID = exports.CMD_KEY_RANDOM_INTEGER_CUSTOM_RANGE = exports.CMD_KEY_RANDOM_LONG = exports.CMD_KEY_RANDOM_INT = exports.CMD_KEY_RANDOM_SHORT = exports.CMD_KEY_RANDOM_BYTE = exports.CMD_KEY_RESET_SEED = void 0;
var CMD_KEY_RESET_SEED = 'extension.resetSeed';
exports.CMD_KEY_RESET_SEED = CMD_KEY_RESET_SEED;
var CMD_KEY_RANDOM_BYTE = 'extension.randomByte';
exports.CMD_KEY_RANDOM_BYTE = CMD_KEY_RANDOM_BYTE;
var CMD_KEY_RANDOM_SHORT = 'extension.randomShort';
exports.CMD_KEY_RANDOM_SHORT = CMD_KEY_RANDOM_SHORT;
var CMD_KEY_RANDOM_INT = 'extension.randomInt';
exports.CMD_KEY_RANDOM_INT = CMD_KEY_RANDOM_INT;
var CMD_KEY_RANDOM_LONG = 'extension.randomLong';
exports.CMD_KEY_RANDOM_LONG = CMD_KEY_RANDOM_LONG;
var CMD_KEY_RANDOM_INTEGER_CUSTOM_RANGE = 'extension.randomIntCustomRange';
exports.CMD_KEY_RANDOM_INTEGER_CUSTOM_RANGE = CMD_KEY_RANDOM_INTEGER_CUSTOM_RANGE;
var CMD_KEY_RANDOM_GUID = 'extension.randomGuid';
exports.CMD_KEY_RANDOM_GUID = CMD_KEY_RANDOM_GUID;
var CMD_KEY_RANDOM_LETTERS_CUSTOM_LENGTH = 'extension.randomLettersCustomLength';
exports.CMD_KEY_RANDOM_LETTERS_CUSTOM_LENGTH = CMD_KEY_RANDOM_LETTERS_CUSTOM_LENGTH;
var CMD_KEY_RANDOM_DIGITS_CUSTOM_LENGTH = 'extension.randomDigitsCustomLength';
exports.CMD_KEY_RANDOM_DIGITS_CUSTOM_LENGTH = CMD_KEY_RANDOM_DIGITS_CUSTOM_LENGTH;
var CMD_KEY_RANDOM_LETTERS_DIGITS_CUSTOM_LENGTH = 'extension.randomLettersDigitsCustomLength';
exports.CMD_KEY_RANDOM_LETTERS_DIGITS_CUSTOM_LENGTH = CMD_KEY_RANDOM_LETTERS_DIGITS_CUSTOM_LENGTH;
var CMD_KEY_RANDOM_LOWERCASE_LETTERS_CUSTOM_LENGTH = 'extension.randomLowercaseLettersCustomLength';
exports.CMD_KEY_RANDOM_LOWERCASE_LETTERS_CUSTOM_LENGTH = CMD_KEY_RANDOM_LOWERCASE_LETTERS_CUSTOM_LENGTH;
var CMD_KEY_RANDOM_LOWERCASE_LETTERS_DIGITS_CUSTOM_LENGTH = 'extension.randomLowercaseLettersDigitsCustomLength';
exports.CMD_KEY_RANDOM_LOWERCASE_LETTERS_DIGITS_CUSTOM_LENGTH = CMD_KEY_RANDOM_LOWERCASE_LETTERS_DIGITS_CUSTOM_LENGTH;
var CMD_KEY_RANDOM_UPPERCASE_LETTERS_CUSTOM_LENGTH = 'extension.randomUppercaseLettersCustomLength';
exports.CMD_KEY_RANDOM_UPPERCASE_LETTERS_CUSTOM_LENGTH = CMD_KEY_RANDOM_UPPERCASE_LETTERS_CUSTOM_LENGTH;
var CMD_KEY_RANDOM_UPPERCASE_LETTERS_DIGITS_CUSTOM_LENGTH = 'extension.randomUppercaseLettersDigitsCustomLength';
exports.CMD_KEY_RANDOM_UPPERCASE_LETTERS_DIGITS_CUSTOM_LENGTH = CMD_KEY_RANDOM_UPPERCASE_LETTERS_DIGITS_CUSTOM_LENGTH;
var CMD_KEY_RANDOM_SAMPLE_FROM_INPUT = 'extension.randomSampleFromInput';
exports.CMD_KEY_RANDOM_SAMPLE_FROM_INPUT = CMD_KEY_RANDOM_SAMPLE_FROM_INPUT;
var CMD_KEY_RANDOM_NAME = 'extension.randomName';
exports.CMD_KEY_RANDOM_NAME = CMD_KEY_RANDOM_NAME;
var CMD_KEY_RANDOM_STREET_ADDRESS = 'extension.randomStreetAddress';
exports.CMD_KEY_RANDOM_STREET_ADDRESS = CMD_KEY_RANDOM_STREET_ADDRESS;
var CMD_KEY_RANDOM_CITY = 'extension.randomCity';
exports.CMD_KEY_RANDOM_CITY = CMD_KEY_RANDOM_CITY;
var CMD_KEY_RANDOM_COUNTRY_CODE = 'extension.randomCountryCode';
exports.CMD_KEY_RANDOM_COUNTRY_CODE = CMD_KEY_RANDOM_COUNTRY_CODE;
var CMD_KEY_RANDOM_COUNTRY_NAME = 'extension.randomCountryName';
exports.CMD_KEY_RANDOM_COUNTRY_NAME = CMD_KEY_RANDOM_COUNTRY_NAME;
var CMD_KEY_RANDOM_PHONE_NUMBER = 'extension.randomPhoneNumber';
exports.CMD_KEY_RANDOM_PHONE_NUMBER = CMD_KEY_RANDOM_PHONE_NUMBER;
var CMD_KEY_RANDOM_EMAIL = 'extension.randomEmail';
exports.CMD_KEY_RANDOM_EMAIL = CMD_KEY_RANDOM_EMAIL;
var CMD_KEY_RANDOM_IP = 'extension.randomIP';
exports.CMD_KEY_RANDOM_IP = CMD_KEY_RANDOM_IP;
var CMD_KEY_RANDOM_IP_V6 = 'extension.randomIPv6';
exports.CMD_KEY_RANDOM_IP_V6 = CMD_KEY_RANDOM_IP_V6;
var CMD_KEY_RANDOM_URL = 'extension.randomUrl';
exports.CMD_KEY_RANDOM_URL = CMD_KEY_RANDOM_URL;
var CMD_KEY_RANDOM_HEX_COLOR = 'extension.randomHexColor';
exports.CMD_KEY_RANDOM_HEX_COLOR = CMD_KEY_RANDOM_HEX_COLOR;
var CMD_KEY_RANDOM_RGB_COLOR = 'extension.randomRgbColor';
exports.CMD_KEY_RANDOM_RGB_COLOR = CMD_KEY_RANDOM_RGB_COLOR;
var CMD_KEY_RANDOM_IBAN = 'extension.randomIban';
exports.CMD_KEY_RANDOM_IBAN = CMD_KEY_RANDOM_IBAN;
var CMD_KEY_RANDOM_REGEX = 'extension.randomRegEx';
exports.CMD_KEY_RANDOM_REGEX = CMD_KEY_RANDOM_REGEX;
var MSG_NO_ACTIVE_TEXT_EDITOR = 'No active text editor found!';
exports.MSG_NO_ACTIVE_TEXT_EDITOR = MSG_NO_ACTIVE_TEXT_EDITOR;
var MSG_ENTER_STRING_LENGTH = 'Enter the length of the string';
exports.MSG_ENTER_STRING_LENGTH = MSG_ENTER_STRING_LENGTH;
var MSG_ENTER_SAMPLE_INPUT = 'Enter a comma-separated list of strings';
exports.MSG_ENTER_SAMPLE_INPUT = MSG_ENTER_SAMPLE_INPUT;
var MSG_INPUT_VALUE_MUST_BE_NUMBER = 'The input value must be a number';
exports.MSG_INPUT_VALUE_MUST_BE_NUMBER = MSG_INPUT_VALUE_MUST_BE_NUMBER;
var MSG_INPUT_VALUE_MUST_CONTAIN_COMMA = 'The input value must contain at least one comma to separate values';
exports.MSG_INPUT_VALUE_MUST_CONTAIN_COMMA = MSG_INPUT_VALUE_MUST_CONTAIN_COMMA;
var MSG_ENTER_SEED = 'Enter new random seed';
exports.MSG_ENTER_SEED = MSG_ENTER_SEED;
var MSG_LEAVE_EMPTY_FOR_DEFAULT = 'Leave empty to use default options';
exports.MSG_LEAVE_EMPTY_FOR_DEFAULT = MSG_LEAVE_EMPTY_FOR_DEFAULT;
var MSG_SEED_RESET = 'Random seed was reset';
exports.MSG_SEED_RESET = MSG_SEED_RESET;
var MSG_SEED_RESET_ERROR = 'Invalid random seed';
exports.MSG_SEED_RESET_ERROR = MSG_SEED_RESET_ERROR;
var MSG_ENTER_INTEGER_RANGE = 'Enter the integer range';
exports.MSG_ENTER_INTEGER_RANGE = MSG_ENTER_INTEGER_RANGE;
var MSG_INTEGER_RANGE_FORMAT = 'MIN-MAX';
exports.MSG_INTEGER_RANGE_FORMAT = MSG_INTEGER_RANGE_FORMAT;
var MSG_INPUT_VALUE_MUST_BE_VALID_RANGE = 'The input value must be a range with a min and max value separated by a hyphen';
exports.MSG_INPUT_VALUE_MUST_BE_VALID_RANGE = MSG_INPUT_VALUE_MUST_BE_VALID_RANGE;
var MSG_ENTER_REGEX = 'Enter the regular expression';
exports.MSG_ENTER_REGEX = MSG_ENTER_REGEX;
var MSG_ENTER_REGEX_ERROR = 'Invalid regular expression';
exports.MSG_ENTER_REGEX_ERROR = MSG_ENTER_REGEX_ERROR;
var VALUE_DEFAULT_STRING_LENGTH = 10;
exports.VALUE_DEFAULT_STRING_LENGTH = VALUE_DEFAULT_STRING_LENGTH;
var VALUE_DEFAULT_SAMPLE_OPTIONS = 'a,b,c';
exports.VALUE_DEFAULT_SAMPLE_OPTIONS = VALUE_DEFAULT_SAMPLE_OPTIONS;