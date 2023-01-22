/* const request = require('request');

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

fetchBreedData("Siberian"); */

const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
if (error) {
callback(error, null);
} else {
const data = JSON.parse(body);
if (data.length === 0) {
callback(`'Error': Breed ${breedName} 'not found', null`);
} else {
callback(null, data[0].description);
}
}
});
};
