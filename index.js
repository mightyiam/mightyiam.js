var e = module.exports

e.firstName = 'Shahar'
e.lastName = 'Or'
e.fullName = e.firstName + ' ' + e.lastName

e.website = 'http://mightyi.am'
e.email = 'mightyiampresence@gmail.com'

e.github = {}
e.github.username = 'mightyiam'
e.github.profileUrl = 'https://github.com/' + e.github.username

e.authorString = [
  e.fullName,
  '<' + e.email + '>',
  '(' + e.website + ')'
].join(' ')
