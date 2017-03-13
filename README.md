# tiny-log

> Simple and small logger for node and the browser.

# Install 

```bash
$ npm install --save-dev tiny-log
```

# Usage

```js
var log = require('tiny-log')

// in production, all log messagges lower than warning will be omited
log.LEVEL = process.env.NODE_ENV === 'production'
            ? 'warn'
            : 'debug'

log.debug('debug')
log.warn('debug')
log.error('debug')
log.fatal('Oh boy...')

log.dump({
  hello: 'world'
})
```
