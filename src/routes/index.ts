const routes: Record<string, Record<string, Function>> = {
  GET: {},
  POST: {},
  PUT: {},
  DELETE: {},
};

const addRoute = (method: string, path: string, handler: Function) => {
  routes[method][path] = handler;
};

export { addRoute, routes };
