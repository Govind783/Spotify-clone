const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '29832f5b28msh4b7df5f357a5997p13adaejsn9f233b3d3b03',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));