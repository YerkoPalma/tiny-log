var Log = require('./')

// in production, all log messagges lower than warning will be omited
var log = process.env.NODE_ENV === 'production'
            ? Log('warn')
            : Log('debug')

function fn () {
  log.debug('debug')
  log.warn('warning')
  function deeper () {
    log.error('error!')
  }
  deeper()
}
log.fatal('Oh boy...')
fn()
log.dump({
  hello: 'world',
  foo: {
    bar: 'baz'
  },
  fn: function () {return this}
})
