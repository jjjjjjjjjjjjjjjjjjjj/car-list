import config from 'shared/config'

import 'isomorphic-fetch'

const SIMULATED_CALL_MS = 2500

// Example of actual remote fetching
export const fetchCars = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${config.CARS__API_BASE}/cars`)

      const cars = await response.json()

      setTimeout(() => resolve(cars), SIMULATED_CALL_MS)
    } catch (error) {
      reject(error)
    }
  })
