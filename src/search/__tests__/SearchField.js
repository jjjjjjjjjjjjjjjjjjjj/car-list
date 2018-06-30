import React from 'react'

import SearchField from '../SearchField'

import { shallow } from 'enzyme'

describe('<SearchField />', () => {
  const mockValue = 'Foo'

  const mockPlaceholder = 'Bar'

  const field = shallow(<SearchField value={mockValue} placeholder={mockPlaceholder} />)

  it('renders an input', () => {
    expect(field.find('input').exists()).toBe(true)
  })

  it('renders an input and passes value prop to it', () => {
    expect(field.find('input').props().value).toBe(mockValue)
  })

  it('renders an input and passes placeholder prop to it', () => {
    expect(field.find('input').props().placeholder).toBe(mockPlaceholder)
  })
})
