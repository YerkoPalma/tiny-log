var global = require('global')
var chalk = require('chalk')

var levels = {
  debug: 20,
  warn: 40,
  error: 50,
  fatal: 100
}

function Logger (level) {
  this.LEVEL = level || 'debug'
  this._LEVEL = levels[this.LEVEL]
}

/* eslint-disable no-caller */
Logger.prototype.debug = function (text) {
  var context = arguments.callee.caller && arguments.callee.caller.name
                ? arguments.callee.caller.name
                : 'unknown'
  this._print('debug', text, context)
}

Logger.prototype.warn = function (text) {
  var context = arguments.callee.caller && arguments.callee.caller.name
                ? arguments.callee.caller.name
                : 'unknown'
  this._print('warn', text, context)
}

Logger.prototype.error = function (text) {
  var context = arguments.callee.caller && arguments.callee.caller.name
                ? arguments.callee.caller.name
                : 'unknown'
  this._print('error', text, context)
}

Logger.prototype.fatal = function (text) {
  var context = arguments.callee.caller && arguments.callee.caller.name
                ? arguments.callee.caller.name
                : 'unknown'
  this._print('fatal', text, context)
}

Logger.prototype.dump = function (obj) {
  this._dump(obj)
}

function getLogger (level) {
  if (typeof global.log === 'undefined') {
    global.log = new Logger(level)
  }
  return global.log
}

Logger.prototype._print = function (level, text, context) {
  var shouldPrint = levels[level] >= this._LEVEL
  if (shouldPrint) {
    var now = new Date()
    var time = paddingRight(now.getHours().toString(), '0', 2) + ':' +
                paddingRight(now.getMinutes().toString(), '0', 2) + ':' +
                paddingRight(now.getSeconds().toString(), '0', 2)
    context = chalk.blue(paddingRight(context, ' ', 15))
    if (level === 'warn') {
      time = chalk.dim.gray('[' + time + ']')
      text = chalk.yellow(text)
    }

    if (level === 'debug') {
      time = chalk.dim.gray('[' + time + ']')
    }

    if (level === 'error') {
      time = chalk.dim.gray('[' + time + ']')
      text = chalk.red(text)
    }

    if (level === 'fatal') {
      time = chalk.bold.bgMagenta('[' + time + ']')
      context = chalk.bold.bgMagenta(context)
      var max = process.stdout.columns - time.length - context.length
      text = chalk.bgMagenta(paddingRight(text, ' ', max))
    }
    var separator = level === 'fatal' ? chalk.bgMagenta(' ') : ' '
    console.log(time + separator + context + separator + text)
  }
}

Logger.prototype._dump = serialize

function paddingRight (s, c, n) {
  if (!s || !c) {
    return s
  }
  if (s.length > n) {
    return s.substr(0, n - 3) + '...'
  }
  var max = (n - s.length) / c.length
  for (var i = 0; i < max; i++) {
    s += c
  }
  return s
}

function serialize (obj, pad) {
  if (typeof obj !== 'object') throw new TypeError('Only can dump objects')
  var props = Object.getOwnPropertyNames(obj)
  pad = pad || '                           '
  for (var prop of props) {
    if (typeof obj[prop] === 'object') {
      console.log(pad + chalk.green(prop + ':'))
      serialize(obj[prop], pad + '  ')
    } else {
      console.log(pad + chalk.green(prop + ': ') + obj[prop].toString().replace(/\n/g, '\n' + pad))
    }
  }
}
module.exports = getLogger
