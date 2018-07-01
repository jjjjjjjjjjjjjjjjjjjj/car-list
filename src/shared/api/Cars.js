import config from 'shared/config'

import 'isomorphic-fetch'

const SIMULATED_CALL_MS = 2500

export const fetchCars = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${config.CARS__API_BASE}/cars`)

      const cars = await response.json()

      // Simulate remote fetch by adding some delay to response
      setTimeout(() => resolve(cars), SIMULATED_CALL_MS)
    } catch (error) {
      reject(error)
    }
  })
