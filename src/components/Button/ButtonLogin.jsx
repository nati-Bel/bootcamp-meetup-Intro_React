import React from 'react';
import PropTypes from 'prop-types';

function ButtonLogin({ text, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}

ButtonLogin.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonLogin;