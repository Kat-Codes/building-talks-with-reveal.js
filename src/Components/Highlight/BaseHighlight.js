import Highlight, { defaultProps } from 'prism-react-renderer';
import React from 'react';
import PropTypes from 'prop-types';
import theme from 'prism-react-renderer/themes/nightOwl';

const BaseHighlight = ({ code = '', language }) => (
  <Highlight {...defaultProps} language={language} code={code} theme={theme}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })} data-line-numbers>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

BaseHighlight.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string.isRequired,
};

export default BaseHighlight;
