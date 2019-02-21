import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCepData } from '../reducers/cepData/action-creators';
import axios from 'axios';

const mapStateToProps = (state) => ({
  cepData: state.cepData
})

const mapDispatchToProps = {
  updateCepData
}

class App extends Component {
  constructor() {
    super();

    this.handleSubmit = async (e) => {
      e.preventDefault();
      // this.props.updateCepData(e.target.cep.value);
      const req = await axios.get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${e.target.cep.value}`);
      this.props.updateCepData(req.data);
    }
  }

  render() {
    const { address, district, city, state, code, status } = this.props.cepData;

    return (
      <div className="app-wrapper">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Digite o CEP" name="cep" />
          <button type="submit">Buscar CEP</button>
        </form>

        {status === 1 ?
          (<div>
            <h3>Informações do CEP {code}</h3>
            <p>Endereço: {address}</p>
            <p>Bairro: {district}</p>
            <p>Cidade: {city}</p>
            <p>Estado: {state}</p>
          </div>)
          : (<p>CEP não encontrado.</p>)}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
