import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ children, transition = 'fade' }) => (
  <section data-transition={transition}>{children}</section>
);

Slide.propTypes = {
  children: PropTypes.node,
  transition: PropTypes.string,
};

export default Slide;
