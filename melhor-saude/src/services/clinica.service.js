import http from "../http-common";

class ClinicaRequestService {
    getAll() {
      return http.get(`/clinica/all`);
    }
  
    get(id) {
      return http.get(`/clinica/show/${id}`);
    }
    
    createWithServico(id, data){
      return http.post(`/clinica/servico/${id}`, data);
    }

    //não usadas
    create(data) {
      return http.post("/clinica", data);
    }
  
    //não usadas
    update(id, data) {
      return http.put(`/clinica/${id}`, data);
    }
  
    //não usadas
    delete(id) {
      return http.delete(`/clinica/${id}`);
    }
  
    //não usadas
    deleteAll() {
      return http.delete(`/clinica`);
    }
    
  }
  
  export default new ClinicaRequestService();