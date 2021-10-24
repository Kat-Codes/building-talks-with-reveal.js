import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ children }) => <aside className="notes">{children}</aside>;

Note.propTypes = {
  children: PropTypes.node,
};

export default Note;
