import { api } from '../../api/api';

export const recorrenciasService = {

  async getAll() {
    const response = await api.get('/recorrencias');

    return response.data;
  },

  async deletar(id: number) {
    const response = await api.delete(
      `/recorrencias/${id}`
    );

    return response.data;
  },

};