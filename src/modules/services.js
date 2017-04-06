import fetch from 'isomorphic-fetch';

async function getWeatherInfo(lat, long) {
  return await (() => {
    return new Promise((resolve, reject) => {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=63363f3ed57dfea947e2d99b53709417&units=imperial`
      )
        .then(xhr => xhr.json())
        .then(resolve)
        .catch(reject);
    });
  })();
}

export { getWeatherInfo };
