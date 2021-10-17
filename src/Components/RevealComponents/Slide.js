import React from 'react';
import PropTypes from 'prop-types';

export default function Slide({ children }) {
  return <section data-transition="fade">{children}</section>;
}

Slide.propTypes = {
  children: PropTypes.node,
};
