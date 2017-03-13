import test from 'ava'
import sinon from 'sinon'
import Log from './'
var log = null

test.beforeEach(t => {
  t.context.log = console.log
  log = Log()
  console.log = sinon.spy()
})

test.afterEach(t => {
  console.log = t.context.log
})

test('log should not accept arguments', t => {
  t.throws(() => { log(null) }, Error)
  t.throws(() => { log() }, Error)
  t.throws(() => { log('do not throw please!') }, Error)
})

test('should expose debug, warn and error functions', t => {
  t.is(typeof log.debug, 'function')
  t.is(typeof log.warn, 'function')
  t.is(typeof log.error, 'function')
  t.is(typeof log.fatal, 'function')
})

test('should expose dump function for objects', t => {
  t.is(typeof log.dump, 'function')
  t.throws(() => { log.dump() }, Error)
  t.throws(() => { log.dump('not an object') }, Error)
})

test('should only print messages if they have higher level than the current log level', t => {
  log.debug('should be called')
  delete global.log
  log = Log('warn')
  log.debug('should not be called')
  t.true(console.log.calledOnce)
})
