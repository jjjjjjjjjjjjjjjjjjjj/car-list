import React from 'react'

import { connect } from 'react-redux'

import * as CarActions from 'shared/redux/car-list/actions'

import Header from 'header/Header'
import CarList from 'list/CarList'
import CarSearchField from 'search/CarSearchField'

import styled from 'styled-components'

const StyledAppContainer = styled.header`
  min-width: 375px;
`

class App extends React.Component {
  render() {
    return (
      <StyledAppContainer>
        <Header heading="List of Cars" subheading="Useful list of cars" />

        <CarSearchField />

        <CarList />
      </StyledAppContainer>
    )
  }

  componentWillMount() {
    this.props.init()
  }
}

const ConnectedApp = connect(
  () => ({}),
  dispatch => ({
    init: () => dispatch(CarActions.init()),
  })
)(App)

export default ConnectedApp
