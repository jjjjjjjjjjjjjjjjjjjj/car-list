import {
  CARS__SET_LIST,
  CARS__SET_SEARCH_TERM,
  CARS__SET_IS_FETCHING,
} from 'shared/redux/car-list/actions'

const initialState = { cars: [], searchTerm: '' }

export const cars = (state = initialState, action) => {
  const { type, cars, searchTerm, isFetching } = action

  switch (type) {
    case CARS__SET_LIST:
      return {
        ...state,
        ...cars,
      }

    case CARS__SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm,
      }

    case CARS__SET_IS_FETCHING:
      return {
        ...state,
        isFetching,
      }

    default:
      return state
  }
}
