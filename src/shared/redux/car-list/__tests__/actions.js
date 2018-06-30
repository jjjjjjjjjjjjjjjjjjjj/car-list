import * as CarActions from '../actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { CARS__SET_IS_FETCHING } from '../actions'
import { CARS__SET_LIST } from '../actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('should create an action to set car list', () => {
    const mockCarList = [
      {
        reg: 'ABC123',
        name: 'Opel',
        color: '#ff00ff',
        year: 2009,
      },
      {
        reg: 'KAK313',
        name: 'Volvo',
        color: '#00ffff',
        year: 2002,
      },
    ]

    const expectedAction = {
      type: CarActions.CARS__SET_LIST,
      cars: mockCarList,
    }

    expect(CarActions.setList(mockCarList)).toEqual(expectedAction)
  })

  it('should create an action to set car search term', () => {
    const mockSearchTerm = 'foo'

    const expectedAction = {
      type: CarActions.CARS__SET_SEARCH_TERM,
      searchTerm: mockSearchTerm,
    }

    expect(CarActions.setSearchTerm(mockSearchTerm)).toEqual(expectedAction)
  })

  it('should create an action to set is fetching flag', () => {
    const mockIsFetching = true

    const expectedAction = {
      type: CarActions.CARS__SET_IS_FETCHING,
      isFetching: mockIsFetching,
    }

    expect(CarActions.setIsFetching(mockIsFetching)).toEqual(expectedAction)
  })
})

describe('async actions', () => {
  it('creates set action is fetching, set list, set is fetching, when initiating', () => {
    const mockCarList = [
      {
        reg: 'ABC123',
        name: 'Opel',
        color: '#ff00ff',
        year: 2009,
      },
      {
        reg: 'KAK313',
        name: 'Volvo',
        color: '#00ffff',
        year: 2002,
      },
    ]

    fetchMock.get('*', {
      body: mockCarList,
      headers: { 'content-type': 'application/json' },
    })

    const expectedActions = [
      { type: CARS__SET_IS_FETCHING, isFetching: true },
      { type: CARS__SET_LIST, cars: { cars: mockCarList } },
      { type: CARS__SET_IS_FETCHING, isFetching: false },
    ]

    const store = mockStore({ cars: mockCarList, isFetching: false })

    return store.dispatch(CarActions.init()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)

      fetchMock.restore()
    })
  })
})
