import { api } from '../../api/api';

export const projecoesService = {
  async getByMes(
    ano: number,
    mes: number
  ) {
    try {
      const response =
        await api.get(
          `/projecoes/mes/${ano}/${mes}`
        );

      return response.data;

    } catch (err: any) {
      console.log(
        'ERRO API PROJECOES →',
        err.response?.data
      );

      throw err;
    }
  },
};