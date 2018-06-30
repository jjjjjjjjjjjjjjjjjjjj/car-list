import React from 'react'

import List from '../List'

import { shallow } from 'enzyme'

describe('<List />', () => {
  const mockItems = [{ foo: 'Bar', bar: 'Baz' }, { foo: 'Bar', bar: 'Baz' }]

  const mockHeadings = ['Foo', 'Bar']

  const list = shallow(<List headings={mockHeadings} items={mockItems} />)

  it('renders rows corresponding to (+!!headings + items.length)', () => {
    expect(list.find('tr').length).toBe(+!!mockHeadings + mockItems.length)
  })

  it('renders ths corresponding to headings.length)', () => {
    expect(list.find('th').length).toBe(mockHeadings.length)
  })

  const loadingList = shallow(<List headings={mockHeadings} items={mockItems} isLoading={true} />)

  it('does not render a table while loading', () => {
    expect(loadingList.find('table').exists()).toBe(false)
  })
})
