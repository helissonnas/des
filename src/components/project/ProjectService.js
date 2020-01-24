import Service from '../__interfaces__/Service';
import ApiEndPoints from '../../constants/ApiEndPoints';

class ProjectService extends Service {
  constructor() {
    super(ApiEndPoints.projects);
  }
}

const instance = new ProjectService();

export default instance;
