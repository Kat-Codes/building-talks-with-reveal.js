import Highlight, { defaultProps } from 'prism-react-renderer';
import React from 'react';
import PropTypes from 'prop-types';

const BaseHighlight = ({ code = '', language }) => (
  <Highlight
    {...defaultProps}
    language={language}
    code={code}
    theme={undefined}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
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
