const semver = require('semver')
const requiredNodeVersion = process.env.npm_package_engines_node
const requiredNpmVersion = process.env.npm_package_engines_npm
const currentNodeVersion = process.version
const exec = require('child_process').exec
const consoleColor = require('colors/safe')

if (!semver.satisfies(currentNodeVersion, requiredNodeVersion)) {
  console.log(consoleColor.red(`Your current NodeJs version ${currentNodeVersion} does not meet the required version for this application: ${requiredNodeVersion}.`))
  process.exit(1)
}

exec('npm -v', (error, stdout, stderr) => {
  if (error) {
    console.log('error: ' + error + stderr)
    return
  }

  const currentNpmVersion = stdout

  if (!semver.satisfies(currentNpmVersion, requiredNpmVersion)) {
    console.log(consoleColor.red(`Your current NPM version ${currentNpmVersion} does not meet the required version for this application: ${requiredNpmVersion}. \n Please upgrade "npm i -g npm@${requiredNpmVersion}" and run "npm install --engine-strict" again`))
    // process.exit(1) -- commented out until a newer version of NPM handles versions correctly again
  }
})
