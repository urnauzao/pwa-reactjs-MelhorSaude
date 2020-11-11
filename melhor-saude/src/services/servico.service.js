import http from "../http-common";

const urlBase = "http://melhorsaude-env.eba-xwk43qff.us-east-2.elasticbeanstalk.com";
class ServicoRequestService {


    getAll() {
      return http.get(`${urlBase}/servico/show`);
    }
  
    get(id) {
      return http.get(`/servico/${id}`);
    }
  
    create(data) {
      return http.post("/servico", data);
    }
  
    update(id, data) {
      return http.put(`/servico/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/servico/${id}`);
    }
  
    deleteAll() {
      return http.delete(`/servicos`);
    }
  
    findByTitle(title) {
      return http.get(`/servicos?title=${title}`);
    }
  }
  
  export default new ServicoRequestService();