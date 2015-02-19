var exports = module.exports

exports.firstName = 'Shahar'
exports.lastName = 'Or'
exports.fullName = exports.firstName + ' ' + exports.lastName

exports.website = 'http://mightyi.am'
exports.email = 'mightyiampresence@gmail.com'

exports.github = {}
exports.github.username = 'mightyiam'
exports.github.profileUrl = 'https://github.com/' + exports.github.username

module.exports.authorString = exports.fullName + ' <' + exports.email + '> (' +
    exports.email + ')'
