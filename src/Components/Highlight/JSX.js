import React from 'react';
import PropTypes from 'prop-types';
import BaseHighlight from './BaseHighlight';

const JSX = ({ code }) => <BaseHighlight language="jsx" code={code} />;

JSX.propTypes = {
  code: PropTypes.string.isRequired,
};

export default JSX;
