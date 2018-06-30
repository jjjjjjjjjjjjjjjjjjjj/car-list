import React from 'react'

import Header from '../Header'

import { shallow } from 'enzyme'

describe('<Header />', () => {
  const mockHeading = 'Foo'

  const mockSubHeading = 'Bar'

  const header = shallow(<Header heading={mockHeading} subheading={mockSubHeading} />)

  it('renders a h1 heading with text corresponding the heading prop', () => {
    expect(header.find('h1').text()).toEqual('Foo')
  })

  it('renders a h4 subheading with text corresponding the subheading prop', () => {
    expect(header.find('h4').text()).toEqual('Bar')
  })
})
