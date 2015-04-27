var pkg = require('auto-package')

pkg.name('mightyiam')
pkg.version_file()
pkg.author(require('./').authorString)
pkg.description('Shahar Or (mightyiam)')
pkg.package.main = 'index.js'
pkg.keyword('person')
pkg.keyword('developer')
pkg.github_repo('mightyiam/mightyiam.js')
pkg.license = 'MIT'
pkg.package.scripts = {
    test: 'npm run package && npm run lint && npm run unit',
    unit: 'jasmine',
    lint: 'standard',
    package: 'node package.js'
}
pkg.package.devDependencies = {
    standard: '*',
    'auto-package': '^0.1.1',
    'jasmine': '^2.2.1'
}
