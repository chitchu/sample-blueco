import React, { PropTypes } from 'react';
import Heading from 'rebass/dist/Heading';
import Text from 'rebass/dist/Text';

import './Embed.css';

const Embed = ({ title, location, temperature, showWind, wind, icon }) => {
  return (
    <div className="embed-widget">
      <Heading level={1}>{title}</Heading>
      <div className="content">
        <img src={icon} alt="Weather icon" />
        <div>
          <Heading level={2}>{location}</Heading>
          <Text bold={true}>{temperature}°</Text>
          {showWind && <Text>Wind {wind}</Text>}
        </div>
      </div>
    </div>
  );
};

Embed.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  temperature: PropTypes.number,
  wind: PropTypes.string,
  showWind: PropTypes.bool
};

export default Embed;
