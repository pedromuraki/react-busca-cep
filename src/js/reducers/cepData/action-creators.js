import { UPDATE_CEP_DATA } from './action-types';

// import axios from 'axios';

export const updateCepData = (data) => {
  // const data = await axios.get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${code}`);

  return {
    type: UPDATE_CEP_DATA,
    data
  }
}
