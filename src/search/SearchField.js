import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledSearchFieldContainer = styled.header`
  padding: 1rem;
`

StyledSearchFieldContainer.displayName = 'StyledSearchFieldContainer'

class SearchField extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    value: '',
    placeholder: '',
    onChange: () => null,
  }

  render() {
    const { value, placeholder, onChange } = this.props

    return (
      <StyledSearchFieldContainer>
        <input value={value} placeholder={placeholder} onChange={onChange} />
      </StyledSearchFieldContainer>
    )
  }
}

export default SearchField
