import {
  getSearchTerm,
  getAllCars,
  getIsFetchingCars,
  getCarsSearchedFor,
  getCarsSearchedForWithoutDuplicatesPrioritizedByModelYear,
} from '../selectors'

describe('selectors', () => {
  it('should select search term', () => {
    const mockSearchTerm = '#42 Foo Bar Baz #42'

    const mockState = {
      cars: {
        searchTerm: mockSearchTerm,
      },
    }

    expect(getSearchTerm(mockState)).toEqual(mockSearchTerm)
  })

  it('should select all cars', () => {
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

    const mockState = {
      cars: {
        cars: mockCarList,
      },
    }

    expect(getAllCars(mockState)).toEqual(mockCarList)
  })

  it('should select is fetching cars flag', () => {
    const mockIsFetching = true

    const mockState = {
      cars: {
        isFetching: mockIsFetching,
      },
    }

    expect(getIsFetchingCars(mockState)).toEqual(mockIsFetching)
  })

  it('should select cars searched for', () => {
    const mockCarList = [
      {
        reg: 'IHN491',
        name: 'Subaru',
        color: '#51f3f3',
        year: 2017,
      },
      {
        reg: 'IHN491',
        name: 'Volvo',
        color: '#00ffff',
        year: 1992,
      },
    ]

    const mockSearchTerm = 2017

    const expectedResult = [
      {
        reg: 'IHN491',
        name: 'Subaru',
        color: '#51f3f3',
        year: 2017,
      },
    ]

    const mockState = {
      cars: {
        searchTerm: mockSearchTerm,
        cars: mockCarList,
      },
    }

    expect(getCarsSearchedFor(mockState)).toEqual(expectedResult)
  })

  it('should select cars searched for', () => {
    const mockCarList = [
      {
        reg: 'IHN491',
        name: 'Subaru',
        color: '#51f3f3',
        year: 2017,
      },
      {
        reg: 'IHN491',
        name: 'Volvo',
        color: '#00ffff',
        year: 2016,
      },
    ]

    const mockSearchTerm = 20

    const expectedResult = [
      {
        reg: 'IHN491',
        name: 'Subaru',
        color: '#51f3f3',
        year: 2017,
      },
    ]

    const mockState = {
      cars: {
        searchTerm: mockSearchTerm,
        cars: mockCarList,
      },
    }

    expect(getCarsSearchedForWithoutDuplicatesPrioritizedByModelYear(mockState)).toEqual(
      expectedResult
    )
  })
})
