import { renderTemplate } from '../common/utils.js';

class HomeController {
  static index = (req: any, res: any) => {
    renderTemplate(res, 'home/index.html');
  };

  static cari = (req: any, res: any) => {
    renderTemplate(res, 'home/cari-mobil.html');
  };
}

export default HomeController;
