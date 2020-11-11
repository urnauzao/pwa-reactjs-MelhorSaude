import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';

/**@desc Styles*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/** @desc Components */
import ServicoCreate from './components/servico/servico-create.component';
import ServicosList from './components/servico/servicos-list.component';
import ServicoDetalhes from './components/servico/servico.component';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/servicos" className="navbar-brand">
            MELHOR SAÚDE
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/servicos"} className="nav-link">
                Serviços
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/servico/novo"} className="nav-link">
                Adicionar
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/servicos"]} component={ServicosList} />
            <Route exact path="/servico/novo" component={ServicoCreate} />
            <Route path="/servico/:id" component={ServicoDetalhes} />
          </Switch>
        </div>

      </div>
    );
  }
}
export default App;


//DELETAR
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
