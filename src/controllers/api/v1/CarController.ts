import fs from 'fs';

class CarController {
  static getAllCars = async (req: any, res: any) => {
    try {
      const cars = await fs.promises.readFile('./data/cars.json', 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(cars);
    } catch (error: any) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: error.message }));
    }
  };

  static searchCars = async (req: any, res: any) => {
    try {
      const { date, time } = req.params;
      const cars = await fs.promises.readFile('./data/cars.json', 'utf8');
      const parsedCars = JSON.parse(cars);
      const availableAt = new Date(`${date}T${time}Z`);
      const driverType = req.params.driverType === '1' ? true : false;
      const passenger = req.params.passenger || 1;
      const filteredCars = parsedCars.filter(
        (car: any) =>
          car.availableAt >= availableAt.toISOString() &&
          car.capacity >= parseInt(passenger) &&
          car.driverType === driverType
      );
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(filteredCars));
    } catch (error: any) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: error.message }));
    }
  };
}

export default CarController;
