import http from 'http';
import { handleRequest } from './routes/route.js';

const server = http.createServer(handleRequest);
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
