import { api } from '../../api/api';

export const lancamentosService = {
  async getByMes(
    ano: number,
    mes: number
  ) {
    try {
      const response =
        await api.get(
          '/lancamentos/mes',
          {
            params: {
              ano,
              mes,
            },
          }
        );

      return response.data;

    }catch (error: any) {
  console.log('STATUS →', error.response?.status);

  console.log(
    'BODY →',
    JSON.stringify(
      error.response?.data,
      null,
      2
    )
  );

  throw error;
}  },

  async getSomatoria() {
  const response =
    await api.get(
      '/lancamentos/somatoria'
    );

  console.log(
    response.data
  );

  return response.data;
},

  async criar(data: any) {
    const response =
      await api.post(
        '/lancamentos',
        data
      );

    return response.data;
  },
};