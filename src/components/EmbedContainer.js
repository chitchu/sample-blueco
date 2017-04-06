import React, { Component } from 'react';
import Loading from './Loading';
import Embed from './Embed';

import { getWeatherInfo } from '../modules/services';

const EmbedWithLoading = Loading(Embed);

const degreesToPoint = deg => {
  let j = deg % 8,
    input = (deg / 8 | 0) % 4,
    cardinal = ['north', 'east', 'south', 'west'],
    pointDesc = [
      '1',
      '1 by 2',
      '1-C',
      'C by 1',
      'C',
      'C by 2',
      '2-C',
      '2 by 1'
    ],
    str1,
    str2,
    strC;

  str1 = cardinal[input];
  str2 = cardinal[(input + 1) % 4];
  strC = str1 === cardinal[0] | str1 === cardinal[2]
    ? str1 + str2
    : str2 + str1;
  return pointDesc[j].replace(1, str1).replace(2, str2).replace('C', strC);
};

class EmbedContainer extends Component {
  state = {
    main: {}
  };

  componentDidMount() {
    // Check for browser capabilities
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async ({
        coords: { latitude, longitude }
      }) => {
        //fetch the weather
        const { name, weather, main, wind } = await getWeatherInfo(
          latitude,
          longitude
        );

        this.setState(prevState => ({
          ...prevState,
          name,
          main,
          tempInF: main.temp,
          tempInC: Math.round((main.temp - 32) * 5 / 9),
          wind: `${degreesToPoint(wind.deg)} ${wind.speed} km/h`,
          icon: `http://openweathermap.org/img/w/${weather[0].icon}.png`
        }));
      });
    }
  }
  render() {
    return (
      <div>
        <EmbedWithLoading
          title={this.props.title}
          showWind={this.props.showWind}
          temperature={
            this.props.unit === 'f' ? this.state.tempInF : this.state.tempInC
          }
          location={this.state.name}
          wind={this.state.wind}
          icon={this.state.icon}
        />
      </div>
    );
  }
}

export default EmbedContainer;
