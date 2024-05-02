import { addRoute, routes } from './index.js';
import url from 'url';
import CarController from '../controllers/api/v1/CarController.js';
import HomeController from '../controllers/HomeController.js';
import { serveStaticFile } from '../common/utils.js';

//API
addRoute('GET', '/api/v1/car', CarController.getAllCars);
addRoute('GET', '/api/v1/car/search', CarController.searchCars);

//WEB
addRoute('GET', '/', HomeController.index);
addRoute('GET', '/cari', HomeController.cari);

const handleRequest = (req: any, res: any) => {
  const method = req.method;
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname || '';

  const handler = routes[method][path];
  if (method === 'GET' && req.url.startsWith('/public/')) {
    serveStaticFile(req, res);
    return;
  } else if (handler) {
    req.params = parsedUrl.query;
    handler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
};

export { handleRequest };
