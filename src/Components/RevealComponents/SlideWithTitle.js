import React from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';

const SlideWithTitle = ({ title, children }) => (
  <Slide>
    <h3>{title}</h3>
    {children}
  </Slide>
);

SlideWithTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SlideWithTitle;
