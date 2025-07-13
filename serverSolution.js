const http = require('http');

const server = http.createServer((req, res) => {
  // Use async/await for long-running task
  (async () => {
    let count = 0;
    for (let i = 0; i < 5; i++) {
      count++;
      console.log('Count:', count);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Done!');
  })();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});