# tiny-log [![npm version](https://img.shields.io/npm/v/@yerkopalma/tiny-log.svg?style=flat-square)](https://www.npmjs.com/package/@yerkopalma/tiny-log) 
[![Build Status](https://img.shields.io/travis/YerkoPalma/tiny-log/master.svg?style=flat-square)](https://travis-ci.org/YerkoPalma/tiny-log) [![test coverage](https://img.shields.io/codecov/c/github/yerkopalma/tiny-log/master.svg?style=flat-square)](https://codecov.io/github/yerkopalma/tiny-log) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> Simple and small logger for node and the browser.

# Install 

```bash
$ npm install --save-dev tiny-log
```

# Usage

```js
var Log = require('tiny-log')

// in production, all log messagges lower than warning will be omited
log = process.env.NODE_ENV === 'production'
            ? Log('warn')
            : Log('debug')

log.debug('debug')
log.warn('debug')
log.error('debug')
log.fatal('Oh boy...')

log.dump({
  hello: 'world'
})
```

#license

[MIT](/license) © [Yerko Palma](https://github.com/YerkoPalma).