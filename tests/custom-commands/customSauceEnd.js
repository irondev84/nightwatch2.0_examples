
exports.command = async function () {
    const SauceLabs = require('saucelabs').default
  
    const sessionId = this.capabilities['webdriver.remote.sessionid']
    const jobName = this.currentTest.name
    const passed = !this.currentTest.results.testcases[jobName].errors > 0 && !this.currentTest.results.testcases[jobName].failed > 0
  
    console.log('==========sessionid==========')
    console.log(sessionId)
    console.log('====================')

    console.log('========jobname============')
    console.log(jobName)
    console.log('====================')

    console.log('====================')
    console.log(passed)
    console.log('====================')

    const myAccount = new SauceLabs({
      user: '',
      key: '',
      region: 'us',
      //proxy: process.env.PROXY_URL || '',
      //tunnelName: process.env.SAUCE_TUNNEL_NAME || '#{KV-SAUCE-TUNNEL-NAME}#',
      //tunnelOwner: process.env.SAUCE_TUNNEL_OWNER || '#{KV-SAUCE-TUNNEL-OWNER}#'
    })
  
    await myAccount.updateJob('ingplSauceAdmin', sessionId, { passed })
  
    return this.end()
  }
 