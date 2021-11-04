import React from 'react';
import PropTypes from 'prop-types';
import BaseHighlight from './BaseHighlight';

const Bash = ({ code }) => <BaseHighlight language="bash" code={code} />;

Bash.propTypes = {
  code: PropTypes.string.isRequired,
};

export default Bash;
