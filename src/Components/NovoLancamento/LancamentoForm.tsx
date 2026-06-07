import React from 'react';
import { ScrollView } from 'react-native';

import { Input } from '../Login/Input';
import { Button } from '../Login/Button';
import { TipoSelector } from './TipoSeletor';

interface Props {
  tipo: 'Receita' | 'Despesa';
  descricao: string;
  valor: string;
  data: string;
  loading: boolean;

  onTipoChange: (
    tipo: 'Receita' | 'Despesa'
  ) => void;

  onDescricaoChange: (text: string) => void;
  onValorChange: (text: string) => void;
  onDataChange: (text: string) => void;

  onSalvar: () => void;
}

export function LancamentoForm({
  tipo,
  descricao,
  valor,
  data,
  loading,
  onTipoChange,
  onDescricaoChange,
  onValorChange,
  onDataChange,
  onSalvar,
}: Props) {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">

      <TipoSelector
        value={tipo}
        onChange={onTipoChange}
      />

      <Input
        label="Descrição"
        placeholder="Ex: Salário"
        value={descricao}
        onChangeText={onDescricaoChange}
      />

      <Input
        label="Valor"
        placeholder="0,00"
        value={valor}
        onChangeText={onValorChange}
        keyboardType="decimal-pad"
      />

      <Input
        label="Data"
        placeholder="AAAA-MM-DD"
        value={data}
        onChangeText={onDataChange}
      />

      <Button
        title="Salvar lançamento"
        onPress={onSalvar}
        loading={loading}
      />

    </ScrollView>
  );
}