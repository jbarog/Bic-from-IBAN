# Bic(SWIFT) from Iban
Generate BIC(SWIFT) from IBAN bank account number


Validating an IBAN 
------------------
```javascript
  var BICFromIBAN = require ("BICFromIBAN");
  
  // Return true if the IBAN is a correct banck account 
  var isValid = BICFromIBAN.validateIBAN("DZ4000400174401001050486");
```

Get a BIC(SWIFT) bank code from IBAN account number 
---------------------------------------------------
```javascript
  var BICFromIBAN = require ("BICFromIBAN");
  
  // Return a String with a Bic code
  var BIC = BICFromIBAN.getBIC("DZ4000400174401001050486");
```

The bank information is https://github.com/PeterNotenboom/SwiftCodes