import Service from '../__interface__/Service';
import ApiEndPoints from '../../constants/ApiEndPoints';

class ProjectService extends Service {
  constructor() {
    super(ApiEndPoints.projects);
  }
}

const instance = new ProjectService();

export default instance;
