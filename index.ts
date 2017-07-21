import {SkipList} from './lib/SkipList'

//
// required environment variables
[
  'NODE_ENV',
  // , 'PORT'
].forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`Environment variable ${name} is missing`)
  }
})

// Environment Configuration
const config = {
  env: process.env.NODE_ENV,
  logger: {
    enabled: process.env.BOOLEAN ? process.env.BOOLEAN.toLowerCase() === 'true' : false,
    level: process.env.LOG_LEVEL || 'info',
  },
  server: {
    port: Number(process.env.PORT),
  },
  // ...
}

module.exports = {
  SkipList,
  config,
};
