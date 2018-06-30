import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { getSearchTerm } from 'shared/redux/car-list/selectors'
import { setSearchTerm } from 'shared/redux/car-list/actions'

import SearchField from './SearchField'

class CarSearchField extends React.Component {
  static propTypes = {
    searchTerm: PropTypes.string,
  }

  static defaultProps = {
    searchTerm: [],
  }

  render() {
    const { searchTerm } = this.props

    return (
      <SearchField
        placeholder="Start typing to search for a car..."
        value={searchTerm}
        onChange={this.onChange}
      />
    )
  }

  onChange = event => this.props.searchFor(event.target.value)
}

const ConnectedCarSearchField = connect(
  state => ({
    searchTerm: getSearchTerm(state),
  }),
  dispatch => ({
    searchFor: text => dispatch(setSearchTerm(text)),
  })
)(CarSearchField)

export default ConnectedCarSearchField
