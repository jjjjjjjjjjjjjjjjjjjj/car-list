import React from 'react'
import PropTypes from 'prop-types'

class List extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    headings: PropTypes.arrayOf(PropTypes.string),
    renderHeading: PropTypes.func,
    renderRow: PropTypes.func,
    renderLoader: PropTypes.func,
    renderEmptyState: PropTypes.func,
    isLoading: PropTypes.bool,
  }

  static defaultProps = {
    headings: [],
    items: [],
    renderRow: (item, i) => (
      <tr key={i}>{Object.values(item).map((value, ii) => <td key={ii}>{value}</td>)}</tr>
    ),
    renderHeading: (heading, i) => <th key={i}>{heading}</th>,
    renderEmptyState: () => <div>Oops, nothing here</div>,
    // eslint-disable-next-line
    renderLoader: () => <marquee>Sleek loading animation</marquee>,
    isLoading: false,
  }

  render() {
    const {
      headings,
      items,
      isLoading,
      renderHeading,
      renderLoader,
      renderRow,
      renderEmptyState,
    } = this.props

    if (isLoading) {
      return renderLoader()
    }

    return (
      <div>
        <table>
          <thead>
            <tr>{headings.map(renderHeading)}</tr>
          </thead>

          <tbody>{items.map(renderRow)}</tbody>
        </table>

        {!items.length && renderEmptyState()}
      </div>
    )
  }
}

export default List
