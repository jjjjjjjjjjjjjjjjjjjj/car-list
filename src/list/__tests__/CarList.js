import React from 'react'

import { CarList } from '../CarList'
import List from '../List'

import { shallow } from 'enzyme'

describe('<CarList />', () => {
  const list = shallow(<CarList />)

  it('renders a single item as it is a container component', () => {
    expect(list.children().length).toBe(0)
  })

  it('renders a list', () => {
    expect(list.find(List).exists()).toBe(true)
  })
})
