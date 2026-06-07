import { api } from '../../api/api';

export const projecoesService = {
  async getByMes(ano: number, mes: number) {
    const response = await api.get('/projecoes/mes', {
      params: { ano, mes },
    });

    return response.data;
  },
};