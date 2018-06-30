import React from 'react'
import PropTypes from 'prop-types'

import Car from 'shared/models/Car'

import styled from 'styled-components'

const ColorIndicator = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props => props.color};
  margin: 0 auto;
`

ColorIndicator.displayName = 'ColorIndicator'

class CarListItem extends React.Component {
  static propTypes = {
    car: PropTypes.shape(Car),
  }

  static defaultProps = {
    car: {
      reg: '',
      name: '',
      color: '#eeeeee',
      year: '',
    },
  }

  render() {
    const { car } = this.props

    return (
      <tr>
        <td>{car.reg}</td>
        <td>{car.name}</td>
        <td>{car.year}</td>
        <td>
          <ColorIndicator color={car.color} />
        </td>
      </tr>
    )
  }
}

export default CarListItem
