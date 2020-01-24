import axios from 'axios';
import ApiEndPoints from '../../constants/ApiEndPoints';

class Service {
  endPoint = null;

  constructor(endPoint) {
    this.endPoint = endPoint;
  }

  getAll(options = {}) {
    return axios.get(`${ApiEndPoints.baseAPIUrl}/${this.endPoint}`);
  }

  get(options = {}) {
    return axios.get(
      `${ApiEndPoints.baseAPIUrl}/${this.endPoint}?${options.key}`
    );
  }

  getById(id) {
    return axios.get(`${ApiEndPoints.baseAPIUrl}/${this.endPoint}/${id}`);
  }

  getByIdCodificado(id) {
    return axios.get(`${ApiEndPoints.baseAPIUrl}/${this.endPoint}/id/${id}`);
  }

  getTotal() {
    return axios.get(`${ApiEndPoints.baseAPIUrl}/${this.endPoint}/total`);
  }

  describeAllColumns() {
    return axios.get(
      `${ApiEndPoints.baseAPIUrl}/${this.endPoint}/describe-all-columns`
    );
  }

  describe() {
    return axios.get(`${ApiEndPoints.baseAPIUrl}/${this.endPoint}/describe`);
  }

  save(object, actionType) {
    if (actionType !== 'new') {
      return this._update(object);
    }
    return this._create(object);
  }

  saveModificated(object, actionType) {
    if (actionType !== 'new') {
      return this.updateModificated(object);
    }
    return this._create(object.newObject);
  }

  delete(object) {
    return axios.delete(`${ApiEndPoints.baseAPIUrl}/${this.endPoint}`, {
      data: object
    });
  }

  _create = object => {
    return axios.post(`${ApiEndPoints.baseAPIUrl}/${this.endPoint}`, object);
  };

  _update = object => {
    return axios.put(`${ApiEndPoints.baseAPIUrl}/${this.endPoint}`, object);
  };

  updateModificated = object => {
    return axios.put(
      `${ApiEndPoints.baseAPIUrl}/${this.endPoint}/update-modificated`,
      object
    );
  };
}

export default Service;
