/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Temporizador = ({ hoursMinSecs, setIsActive }) => {
  const { minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[mins, secs], setTime] = useState([minutes, seconds]);

  // const reset = () => setTime([parseInt(minutes, 10), parseInt(seconds, 10)]);

  const tick = () => {
    if (mins === 0 && secs === 0) {
      setIsActive(false);
      // reset();
    } else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <p>
      {`${mins.toString().padStart(2, '0')}:${secs
        .toString()
        .padStart(2, '0')}`}
    </p>
  );
};

export default Temporizador;

Temporizador.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  hoursMinSecs: Proptypes.object.isRequired,
};
