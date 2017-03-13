# tiny-log [![npm version](https://img.shields.io/npm/v/@yerkopalma/tiny-log.svg?style=flat-square)](https://www.npmjs.com/package/@yerkopalma/tiny-log) 
[![Build Status](https://img.shields.io/travis/YerkoPalma/tiny-log/master.svg?style=flat-square)](https://travis-ci.org/YerkoPalma/tiny-log) [![test coverage](https://img.shields.io/codecov/c/github/yerkopalma/tiny-log/master.svg?style=flat-square)](https://codecov.io/github/yerkopalma/tiny-log) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> Simple and small logger for node and the browser.

![](screenshot.png)

# Install 

```bash
$ npm install --save-dev @yerkopalma/tiny-log
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

Every log message, except dump messages, is composed by a timestamp, a context (the name of the caller function) and the formated message. If no context is provided (anonymous or undefined function) `'unknown'` is printed as context.
Dump messages, are some kinf of yaml representation of objects.

# license

[MIT](/license) © [Yerko Palma](https://github.com/YerkoPalma).
