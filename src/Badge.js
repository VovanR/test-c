import React from 'react'
import PropTypes from 'prop-types'

export default function Badge({
  children,
}) {
  const props = {
    className: 'badge',
  }

  return React.createElement('span', props, children)
}

Badge.propTypes = {
  children: PropTypes.node,
}
