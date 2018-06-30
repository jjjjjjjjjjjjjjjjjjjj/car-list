import development from './development'
import staging from './staging'
import production from './production'

export const getConfig = environment => {
  switch (environment) {
    case 'development':
      return development

    case 'staging':
      return staging

    case 'production':
      return production

    default:
      return development
  }
}

const config = getConfig(process.env.NODE_ENV)

export default config
