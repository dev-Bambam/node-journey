import http from 'http';
import fs from 'fs';

// reading in file 
let landingPage = fs.readFileSync('./templates/index.html', 'utf-8');
let movieJSONData = JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'));
let moviesHtml = fs.readFileSync('./templates/movie.html', 'utf-8');



// mapping the input

const movies = movieJSONData.map((movie) => {
  let output = moviesHtml
    .replace("{{%MOVIETITLE%}}", movie.title)
    .replace("{{%GENRE%}}", movie.genre[0])
    .replace("{{%POSTERE%}}", movie.image_url)
    .replace("{{%YEAR%}}", movie.release_date);

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
    response.end(landingPage.replace('{{%CONTENT%}}', movies.join('')))
    // console.log(movies)
  }
  
});
// step 2: listen to the server
server.listen(8000, 'localhost', () => {
    console.log('server has started')
})
