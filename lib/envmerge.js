var merge = require('deepmerge')

module.exports = envmerge

function envmerge (json) {
  var env = process.env.NODE_ENV || 'development'
  return merge(json, json[env] || {})
}
