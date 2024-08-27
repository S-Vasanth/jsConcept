const request = require("request");

const forecast = (latitude, longitude) => {
  const url =
    "http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log("Unable to connect to weather service!");
    } else if (response.body.error) {
      console.log("Unable to find location");
    } else {
      console.log(
        response.body.daily.data[0].summary +
          " It is currently " +
          response.body.currently.temperature +
          " degress out. There is a " +
          response.body.currently.precipProbability +
          "% chance of rain."
      );
    }
  });
};
forecast(137.78, 786.7);

const geocode = (address) => {
  const geocodeURL =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1";

  request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
      console.log("Unable to connect to location services!");
    } else if (response.body.features.length === 0) {
      console.log("Unable to find location. Try another search.");
    } else {
      const latitude = response.body.features[0].center[0];
      const longitude = response.body.features[0].center[1];
      console.log(latitude, longitude);
    }
  });
};

geocode("chennai");
