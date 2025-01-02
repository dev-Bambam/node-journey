import http from 'http'

// step 1: create server
const server = http.createServer((req, resp) => {
    resp.end('hello from server')
    console.log('request recieved');
});
// step 2: listen to the server
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started')
})
