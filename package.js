var package = require('auto-package')

package.name('mightyiam')
package.version_file()
package.author(require('./').authorString)
package.description('Shahar Or (mightyiam)')
package.package.main = 'index.js'
package.keyword('person')
package.keyword('developer')
package.github_repo('mightyiam/mightyiam.js')
package.license = 'MIT'
package.package.scripts = {
    test: 'npm run lint && npm run package',
    lint: 'standard',
    package: 'node package.js'
}
package.package.devDependencies = {
    standard: '*',
    'auto-package': '^0.1.1'
}
