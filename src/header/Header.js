import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledHeaderContainer = styled.header`
  margin-top: 2rem;
  padding: 2rem 1rem 1rem;
`

class Header extends React.Component {
  static propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string,
  }

  render() {
    const { heading, subheading } = this.props

    return (
      <StyledHeaderContainer>
        <h1>{heading}</h1>
        <h4>{subheading}</h4>
      </StyledHeaderContainer>
    )
  }
}

export default Header
