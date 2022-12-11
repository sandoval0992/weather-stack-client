const WeatherStackApiClient = require('./client/WeatherStackApiClient');

const apiClient = new WeatherStackApiClient();

const params = {
  accessKey: process.env.ACCESS_KEY,
  query: 'New York',
};

apiClient
  .currentWeather(params)
  .then(function (response) {
    console.log(`Response: ${JSON.stringify(response)}`);
  })
  .catch(function (err) {
    console.log(`Error: ${JSON.stringify(err)}`);
  });
