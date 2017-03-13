var Log = require('./')
var level = process.env.NODE_ENV === 'production'
            ? 'error'
            : 'debug'
var log = Log(level)
log.LEVEL = level
log.debug('Hi, I\'m debuggin?')
log.warn('Watch out')

setTimeout(function () {
  log.error('Oh no!')
}, 500)

setTimeout(function () {
  fatallity()
}, 600)
function fn () {
  log.debug('inside of fn')
}
fn()
function someLongNamedFunction () {
  log.warn('would it work??')
}
function fatallity () {
  log.fatal('heavy mistake!')
}
someLongNamedFunction()

log.dump({
  hello: 'world',
  foo: function (bar) {
    return bar
  },
  nested: {
    foo: {
      bar: 'baz'
    }
  },
  empty: {}
})

log.dump('dumping a string')
