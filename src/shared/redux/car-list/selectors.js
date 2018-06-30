import { createSelector } from 'reselect'

import { get } from 'lodash'

export const getSearchTerm = state => get(state, 'cars.searchTerm', '')

export const getAllCars = state => get(state, 'cars.cars', [])

export const getIsFetchingCars = state => get(state, 'cars.isFetching', false)

export const getCarsSearchedFor = createSelector([getAllCars, getSearchTerm], (cars, searchTerm) =>
  cars.filter(car => `${car.year}`.match(new RegExp(searchTerm, 'i')))
)

export const getCarsSearchedForWithoutDuplicatesPrioritizedByModelYear = createSelector(
  [getCarsSearchedFor],
  cars =>
    Object.values(
      cars.reduce((a, v) => (a[v.reg] && a[v.reg].year > v.year ? a : { ...a, [v.reg]: v }), {})
    )
)
