import React, { useState } from 'react';
import {Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View,} from 'react-native';
import { Colors, FontSize, Radius, Shadow, Spacing } from '../styles/theme';
import { lancamentosService } from '../services/lancamentos/lancamentosServices';
import { NovoLancamentoHeader } from '../components/NovoLancamento/NovoLancamentoHeader';
import { TipoSelector } from '../components/NovoLancamento/TipoSeletor';
import { Input } from '../components/Login/Input';
import { Button } from '../components/Login/Button';
import { LancamentoForm } from '../components/NovoLancamento/LancamentoForm';

interface Props { onSalvo: () => void; onVoltar: () => void; }
export function NovoLancamentoScreen({ onSalvo, onVoltar }: Props) {
  const [descricao, setDescricao] = useState('');
  const [valor,     setValor]     = useState('');
  const [data,      setData]      = useState(new Date().toISOString().slice(0, 10));
  const [tipo,      setTipo]      = useState<'Receita' | 'Despesa'>('Despesa');
  const [loading,   setLoading]   = useState(false);

  const salvar = async () => {
    if (!descricao.trim()) { Alert.alert('Campo obrigatório', 'Informe a descrição.'); return; }
    const valorNum = parseFloat(valor.replace(',', '.'));
    if (isNaN(valorNum) || valorNum <= 0) { Alert.alert('Valor inválido', 'Informe um valor positivo.'); return; }

    const valorFinal = tipo === 'Despesa' ? -Math.abs(valorNum) : Math.abs(valorNum);

    setLoading(true);
    try {
      await lancamentosService.criar({ descricao: descricao.trim(), valor: valorFinal, data: `${data}T00:00:00`, tipo });
      Alert.alert('Sucesso', 'Lançamento criado!', [{ text: 'OK', onPress: onSalvo }]);
    } catch (e: any) {
      Alert.alert('Erro', e?.response?.data || 'Não foi possível salvar.');
    } finally { setLoading(false); }
  };

  return (
    <View style={styles.root}>
      {/* Header */}
      <NovoLancamentoHeader
      onVoltar={onVoltar}
      />

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.flex}>
        <LancamentoForm
          tipo={tipo}
          descricao={descricao}
          valor={valor}
          data={data}
          loading={loading}
          onTipoChange={setTipo}
          onDescricaoChange={setDescricao}
          onValorChange={setValor}
          onDataChange={setData}
          onSalvar={salvar}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root:       { flex: 1, backgroundColor: '#faf5f6' },
  flex:       { flex: 1 },

  form:    { padding: Spacing.xl },
  label:   { fontSize: FontSize.base, fontWeight: '700', color: Colors.textPrimary, marginBottom: Spacing.xs, marginTop: Spacing.lg },

});
