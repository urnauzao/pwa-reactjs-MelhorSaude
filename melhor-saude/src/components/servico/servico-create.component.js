import React, {Component} from "react";
import ServicoRequestService from '../../services/servico.service';

export default class ServicoCreate extends Component{
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveServico = this.saveServico.bind(this);
        this.newServico = this.newServico.bind(this);
    
        this.state = {
          id: null,
          title: "",
          description: "", 
          published: false,
    
          submitted: false
        };
      }
    
      onChangeTitle(e) {
        this.setState({
          title: e.target.value
        });
      }
    
      onChangeDescription(e) {
        this.setState({
          description: e.target.value
        });
      }
    
      saveServico() {
        var data = {
          title: this.state.title,
          description: this.state.description
        };
    
        ServicoRequestService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
              title: response.data.title,
              description: response.data.description,
              published: response.data.published,
    
              submitted: true
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      newServico() {
        this.setState({
          id: null,
          title: "",
          description: "",
          published: false,
    
          submitted: false
        });
      }

    render(){
        return (
            <div className="submit-form">
              {this.state.submitted ? (
                <div>
                  <h4>Serviço publicado com sucesso!</h4>
                  <button className="btn btn-success" onClick={this.newServico}>
                    Novo Serviço
                  </button>
                </div>
              ) : (
                <div>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      required
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      name="title"
                    />
                  </div>
      
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      required
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      name="description"
                    />
                  </div>
      
                  <button onClick={this.saveServico} className="btn btn-success">
                    Salvar
                  </button>
                </div>
              )}
            </div>
          );
    }
}