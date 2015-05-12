var pkg = require('auto-package')

pkg.name = 'mightyiam'
pkg.versionFile()
pkg.author = require('./').authorString
pkg.description = 'Shahar Or (mightyiam)'
pkg.main = 'index.js'
pkg.keyword('person')
pkg.keyword('developer')
pkg.githubRepo('mightyiam/mightyiam.js')
pkg.license = 'MIT'
pkg.scripts = {
  lint: 'standard',
  test: 'npm run lint'
}
pkg.devDependencies = {
  standard: '*',
  'auto-package': '^1.0.0'
}
