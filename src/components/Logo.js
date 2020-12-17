import React from 'react';

const Logo = (props) => {
  return (
    <img
      style={{height: '40px'}}
      alt="Logo"
      src="/static/images/comb-logo.png"
      {...props}
    />
  );
};

export default Logo;
