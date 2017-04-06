import React from 'react';
// import Embed from './Embed';
import Embed from './EmbedContainer';

const EmbedRoute = ({ match }) => {
  const { title, unit, wind } = match.params;
  return (
    <div>
      <Embed
        title={title}
        unit={unit}
        showWind={wind === 'true' ? true : false}
      />
    </div>
  );
};

export default EmbedRoute;
