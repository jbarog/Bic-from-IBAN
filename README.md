# Bank from Iban
Get bank data from IBAN bank account number


Validating an IBAN
------------------
```javascript
  var BankFromIBAN = require ("BankFromIBAN");

  // Return true if the IBAN is a correct bank account
  var isValid = BankFromIBAN.validateIBAN("DZ4000400174401001050486");
```

Get a BIC(SWIFT) bank code from IBAN account number
---------------------------------------------------
```javascript
  var BankFromIBAN = require ("BankFromIBAN");

  // Return a String with a Bic code
  var bic = BankFromIBAN.getBIC("DZ4000400174401001050486");
```

Get bank data from IBAN account number
---------------------------------------------------
```javascript
  var BankFromIBAN = require ("BankFromIBAN");

  // Return a String with a Bic code
  var bankInfo = BankFromIBAN.getBankInfo("DZ4000400174401001050486");
  /*
  {
    "id": 1,
    "bank": "ANDORRA BANC AGRICOL REIG S.A.",
    "city": "LES ESCALDES",
    "branch": null,
    "swift_code": "BACAADAD"
  },
  */

```

The bank information is https://github.com/PeterNotenboom/SwiftCodes
