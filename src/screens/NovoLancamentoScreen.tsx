import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors, FontSize, Radius, Shadow, Spacing } from '../styles/theme';
import { lancamentosService } from '../api/services';
import { NovoLancamentoHeader } from '../components/NovoLancamento/NovoLancamentoHeader';
import { TipoSelector } from '../components/NovoLancamento/TipoSeletor';
import { Input } from '../components/Login/Input';
import { Button } from '../components/Login/Button';

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
        <ScrollView contentContainerStyle={styles.form} keyboardShouldPersistTaps="handled">

          {/* Tipo — Receita / Despesa */}
          <Text style={styles.label}>Tipo</Text>
          <TipoSelector
            value={tipo}
            onChange={setTipo}
          />

          <Text style={styles.label}>Descrição *</Text>
          <Input
            label="Descrição *"
            placeholder="Ex: Salário, Aluguel, Supermercado..."
            value={descricao}
            onChangeText={setDescricao}
          />

          <Input
            label="Valor (R$) *"
            placeholder="0,00"
            value={valor}
            onChangeText={setValor}
            keyboardType="decimal-pad"
          />

          <Text style={styles.label}>Data</Text>
          <Input
            label="Data"
            placeholder="AAAA-MM-DD"
            value={data}
            onChangeText={setData}
          />

          <Button
            title="Salvar lançamento"
            onPress={salvar}
            loading={loading}
          />
        </ScrollView>
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
