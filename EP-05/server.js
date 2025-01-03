import http from 'http';
import fs from 'fs';

// reading in file 
let landingPage = fs.readFileSync('./templates/index.html', 'utf-8');
let movieRawData = fs.readFileSync('./data/movies.json');

// step 1: create server
const server = http.createServer((request, response) => {
    let path = request.url;
    path = path.toLocaleLowerCase();

    // creating a simple route
    if (path === '/' || path === '/home') {
        response.writeHead(200, {
            "content-type": 'text/html'
        });
        landingPage = landingPage.replace(
          "{{%CONTENT%}}",
          "You are in the hompage"
        );
        landingPage = landingPage.replace(
          "{{%h2%}}",
          "Home page"
        );
        response.end(landingPage);
    } else if (path === '/about') {
        response.writeHead(200, {
          "content-type": "text/html",
        });
        response.end(
          landingPage.replace("{{%%CONTENT%%}}", "You are in the about page")
        );
    }
});
// step 2: listen to the server
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started')
})
