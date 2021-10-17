import React from 'react';
import BaseHighlight from './BaseHighlight';
import PropTypes from 'prop-types';

const JSX = ({ code }) => <BaseHighlight language="jsx" code={code} />;

JSX.propTypes = {
  code: PropTypes.string.isRequired,
};

export default JSX;
