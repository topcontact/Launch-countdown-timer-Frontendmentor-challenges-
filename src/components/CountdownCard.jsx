import React from 'react';
import PropTypes from 'prop-types';
import './CountdownCard.css';

function CountdownCard({ number, label }) {
  const formattedNumber = String(number).padStart(2, '0');

  return (
    <div className="time-block">
      <div className="number">
        {formattedNumber}
        <div className="notch notch-left"></div>
        <div className="notch notch-right"></div>
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

CountdownCard.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
};

export default React.memo(CountdownCard);
