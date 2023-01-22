const request = require('request');

function fetchBreedData(breed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      console.log(data);
    } else {
      console.log(error);
    }
  });
}

fetchBreedData("Siberian");