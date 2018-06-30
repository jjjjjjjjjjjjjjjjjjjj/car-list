import * as CarApi from 'shared/api/Cars'

// -- init

export const init = () => async dispatch => {
  try {
    console.log('[REDUX][CAR_LIST] Init action called, fetching cars')

    dispatch(setIsFetching(true))

    const cars = await CarApi.fetchCars()

    console.log(`[REDUX][CAR_LIST] Received and parsed ${cars.length}, adding to state`)

    dispatch(setList({ cars }))

    dispatch(setIsFetching(false))
  } catch (error) {
    console.log('[REDUX][CAR_LIST] Error when fetching cars: ', error)

    // dispatch error

    dispatch(setIsFetching(false))
  }
}

// -- set list of cars

export const CARS__SET_LIST = 'CARS__SET_LIST_LIST'

export const setList = cars => ({
  type: CARS__SET_LIST,
  cars,
})

// -- set searching for

export const CARS__SET_SEARCH_TERM = 'CARS__SET_SEARCH_TERM'

export const setSearchTerm = searchTerm => ({
  type: CARS__SET_SEARCH_TERM,
  searchTerm,
})

// -- set is fetching

export const CARS__SET_IS_FETCHING = 'CARS__SET_IS_FETCHING'

export const setIsFetching = isFetching => ({
  type: CARS__SET_IS_FETCHING,
  isFetching,
})
