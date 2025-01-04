import http from 'http';
import fs from 'fs';

// reading in file 
let landingPage = fs.readFileSync('./templates/index.html', 'utf-8');
let movieJSONData = JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'));
let moviesHtml = fs.readFileSync('./templates/movie.html', 'utf-8');
const { action, sciFi, thriller} = movieJSONData.genre;

// mapping the input

const movie = movieJSONData.map((movie) => {
  let output = moviesHtml.replace("{{%movieTitle%}},", movie.title);
  output = moviesHtml.replace("{{%genre%}},", action);
  output = moviesHtml.replace("{{%year%}},", movie.release_date);

  return output;
});
// step 1: create server
const server = http.createServer((request, response) => {
    let path = request.url;
  path = path.toLocaleLowerCase();
  

  // creating a simple route
  if (path === '/' || path === '/home') {
    response.writeHead(200, {
      'content-type': 'text/html'
    })
    response.end(landingPage.replace('{{%CONTENT%}}', 'you are in the hompage'))
    console.log(movie)
  }
  
});
// step 2: listen to the server
server.listen(8000, 'localhost', () => {
    console.log('server has started')
})
