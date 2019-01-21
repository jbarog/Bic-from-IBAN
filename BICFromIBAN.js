//      var Swift = getBIC("DZ4000400174401001050486");

/**
 * getBIC Return a Bic(SWIFT) code from Iban
 *
 * @param iban     The IBAN account.
 * @return         The Bic(SWIFT) Code
 */
function getBIC(iban) {
    if (validateIBAN(iban)) {
        var country = iban.substring(0, 2);
        var banks = require("./AllCountries/" + country + ".json");
        var bankCode = iban.substring(4, 8).replace(/^0+/, '');

        var item = banks.list.find((d) => {
            return d.id === bankCode
        });

        return item == undefined ? "" : item.swift_code.concat("XXXXXXXXXXX").substring(0,11);
    } else {
        return "";
    }
}

/**
 * getBankInfo Return full object from JSON data
 *
 * @param iban     The IBAN account.
 * @return         Bank information
 */
function getBankInfo(iban) {
    if (validateIBAN(iban)) {
        var country = iban.substring(0, 2);
        var banks = require("./AllCountries/" + country + ".json");
        var bankCode = iban.substring(4, 8).replace(/^0+/, '');

        var item = banks.list.find((d) => {
            return d.id === bankCode
        });

        return item;
    } else {
        return false;
    }
}

/**
 * mod97 function for large numbers
 *
 * @param str     The number as a string.
 * @return        The number mod 97.
 */
function _txtMod97(str) {
    var res = 0;
    for (var i = 0; i < str.length; i++) {
        res = (res * 10 + parseInt(str[i], 10)) % 97;
    }
    return res;
}

/**
 * Checks if an IBAN is valid (no country specific checks are done).
 *
 * @param iban        The IBAN to check.
 * @return            True, if the IBAN is valid.
 */
function validateIBAN(iban) {
    var ibrev = iban.substr(4) + iban.substr(0, 4);
    return _txtMod97(_replaceChars(ibrev)) == 1;
}

/**
 * Replace letters with numbers using the SEPA scheme A=10, B=11, ...
 * Non-alphanumerical characters are dropped.
 *
 * @param str     The alphanumerical input string
 * @return        The input string with letters replaced
 */
function _replaceChars(str) {
    var res = ""
    for (var i = 0; i < str.length; i++) {
        var cc = str.charCodeAt(i);
        if (cc >= 65 && cc <= 90) {
            res += (cc - 55).toString();
        } else if (cc >= 97 && cc <= 122) {
            res += (cc - 87).toString();
        } else if (cc >= 48 && cc <= 57) {
            res += str[i]
        }
    }
    return res;
}

var exports = {
    getBankInfo: getBankInfo,
    getBIC: getBIC,
    validateIBAN: validateIBAN
}

module.exports = exports;
