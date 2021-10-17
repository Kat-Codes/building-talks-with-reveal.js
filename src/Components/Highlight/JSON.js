import React from 'react';
import BaseHighlight from './BaseHighlight';
import PropTypes from 'prop-types';

const JSON = ({ code }) => <BaseHighlight language="json" code={code} />;

JSON.propTypes = {
  code: PropTypes.string.isRequired,
};

export default JSON;
