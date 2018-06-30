import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import {
  getCarsSearchedForWithoutDuplicatesPrioritizedByModelYear,
  getIsFetchingCars,
} from 'shared/redux/car-list/selectors'

import Car from 'shared/models/Car'

import List from 'list/List'
import CarListItem from 'list/CarListItem'

export class CarList extends React.Component {
  static propTypes = {
    cars: PropTypes.arrayOf(PropTypes.shape(Car)),
    isFetchingCars: PropTypes.bool,
  }

  static defaultProps = {
    cars: [],
    isFetchingCars: false,
  }

  render() {
    const { cars, isFetchingCars } = this.props

    const headings = ['Registration', 'Make', 'Model year', 'Color']

    return (
      <List
        headings={headings}
        items={cars}
        renderRow={this.renderRow}
        isLoading={isFetchingCars}
      />
    )
  }

  renderRow = (car, i) => <CarListItem key={i} car={car} />
}

const ConnectedCarList = connect(state => ({
  cars: getCarsSearchedForWithoutDuplicatesPrioritizedByModelYear(state),
  isFetchingCars: getIsFetchingCars(state),
}))(CarList)

export default ConnectedCarList
