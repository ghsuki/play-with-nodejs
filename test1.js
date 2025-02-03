const http = require('http')

http.createServer((request, response) => {
    response.end('Hello world   ')
  
  }).listen(8080)
  
  console.log('Server running at https://localhost:8080/')