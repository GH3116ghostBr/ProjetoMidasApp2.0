import { api } from '../../api/api';

export const lancamentosService = {
  async getByMes(ano: number, mes: number) {
    const response = await api.get('/lancamentos/mes', {
      params: { ano, mes },
    });

    return response.data;
  },

  async getSomatoria() {
    const response = await api.get('/lancamentos/somatoria');

    return response.data;
  },

  async criar(data: any) {
    const response = await api.post(
      '/lancamentos',
      data
    );

    return response.data;
  },
};