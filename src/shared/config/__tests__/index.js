import development from '../development'
import staging from '../staging'
import production from '../production'

import { getConfig } from '../'

describe('config', () => {
  it('should return development config given development environment', () => {
    expect(getConfig('development')).toEqual(development)
  })

  it('should return staging config given staging environment', () => {
    expect(getConfig('staging')).toEqual(staging)
  })

  it('should return production config given production environment', () => {
    expect(getConfig('production')).toEqual(production)
  })
})
