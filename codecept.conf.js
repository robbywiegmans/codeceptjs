exports.config = {

  bootstrap: false,

  helpers: {
      Puppeteer: {
          show: true,
          url: 'http://todomvc.com/examples/angularjs/#/'
      },
      
      Mochawesome: {}
  },

  include: {
      I: './steps_file.js',
  },

  name: 'workshop-introduction-codeceptjs',

  output: './output',

  timeout: 10000,

  tests: './features/*_test.js',

  mocha: {
    'reporterOptions': {        
        'codeceptjs-cli-reporter': {
          stdout: '-',
          options: {
            verbose: false,
            steps: true
          }
        },
        'mocha-junit-reporter': {
          stdout: '-',
          options: {
            mochaFile: './output/result.xml'
          }
        },
        mochawesome: {
          stdout: './output/console.log',
          options: {
            reportDir: './output',
            reportFilename: 'report'
          }
        }
      }
    }
  }
