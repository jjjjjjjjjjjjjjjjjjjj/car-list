import React from 'react'

import CarListItem from '../CarListItem'

import styled from 'styled-components'

import { shallow } from 'enzyme'

describe('<CarListItem />', () => {
  const mockCar = {
    reg: 'APY482',
    name: 'Tesla',
    color: '#15f3f8',
    year: 2015,
  }

  const carListItem = shallow(<CarListItem car={mockCar} />)

  it('renders registration number first', () => {
    expect(
      carListItem
        .find('td')
        .at(0)
        .text()
    ).toEqual(mockCar.reg)
  })

  it('renders name second', () => {
    expect(
      carListItem
        .find('td')
        .at(1)
        .text()
    ).toEqual(mockCar.name)
  })

  it('renders year third', () => {
    expect(
      carListItem
        .find('td')
        .at(2)
        .text()
    ).toEqual(String(mockCar.year))
  })

  it('renders color as a styled div fourth', () => {
    expect(
      carListItem
        .find('td')
        .at(3)
        .find('ColorIndicator')
        .exists()
    ).toBe(true)
  })
})
