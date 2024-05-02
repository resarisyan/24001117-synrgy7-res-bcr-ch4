import path from 'path';
import fs from 'fs';

const PUBLIC_DIR = path.resolve('./public');
const VIEW_DIR = path.resolve('./src/views');

const getContentType = (filePath: string) => {
  const ext = path.extname(filePath);
  switch (ext) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'application/json';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    default:
      return 'application/octet-stream';
  }
};

const serveStaticFile = (req: any, res: any) => {
  const reqUrl = req.url.split('/').slice(2).join('/');
  const filePath = path.join(PUBLIC_DIR, reqUrl);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found!');
    } else {
      const contentType = getContentType(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
};

const renderTemplate = (res: any, template: string) => {
  try {
    fs.readFile(path.join(VIEW_DIR, template), 'utf8', (err, file) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found!');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(file);
      }
    });
  } catch (error: any) {
    res.writeHead(500);
    res.end(JSON.stringify({ message: error.message }));
  }
};

export { serveStaticFile, renderTemplate };
