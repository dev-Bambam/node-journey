import http from 'http';
import fs from 'fs';

// reading in file 
const landingPage = fs.readFileSync('./index.html', 'utf-8')
// step 1: create server
const server = http.createServer((request, response) => {
    let path = request.url;
    path = path.toLocaleLowerCase();

    // creating a simple route
    if (path === '/' || path === '/home') {
        response.writeHead(200, {
            "content-type": 'text/html'
        });
        response.end(landingPage.replace('{{%%CONTENT%%}}', 'You are in the hompage'));
        response.end(landingPage.replace('{{%%CONTENT%%}}', 'You are in the hompage'));
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
