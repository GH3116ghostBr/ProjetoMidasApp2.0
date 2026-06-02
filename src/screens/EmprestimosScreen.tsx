import React, { useState } from 'react';

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Colors, FontSize, Radius, Shadow, Spacing } from '../styles/theme';
import { emprestimosService } from '../api/services';
import type { Emprestimo } from '../types';

import { EmprestimosButton } from '../Components/Emprestimos/EmprestimosButton';
import { EmprestimosHeader } from '../Components/Emprestimos/EmprestimosHeader';
import { EmprestimosSimulacao } from '../Components/Emprestimos/EmprestimosSimulacao';

interface Props {
  onVoltar: () => void;
}

export function EmprestimosScreen({ onVoltar }: Props) {
  const [nome, setNome] = useState('');
  const [provedor, setProvedor] = useState('');
  const [valor, setValor] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [iof, setIof] = useState('');

  const [resultado, setResultado] = useState<Emprestimo | null>(null);
  const [loading, setLoading] = useState(false);

  const simular = async () => {
    const v = parseFloat(valor.replace(',', '.'));
    const p = parseInt(parcelas, 10);

    if (!nome.trim() || isNaN(v) || isNaN(p) || p < 1) {
      Alert.alert('Atenção', 'Preencha nome, valor e parcelas.');
      return;
    }

    setLoading(true);

    try {
      const res = await emprestimosService.simular({
        nomeEmprestimo: nome.trim(),
        provedorEmprestimo: provedor.trim() || undefined,
        valorEmprestimo: v,
        parcelasEmprestimo: p,
        iofEmprestimo: parseFloat(iof) || 0,
        data: new Date().toISOString().slice(0, 10) + 'T00:00:00',
      });

      setResultado(res);
    } catch (e: any) {
      Alert.alert('Erro', e?.response?.data || 'Erro na simulação');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.root}>
      <EmprestimosHeader onVoltar={onVoltar} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <ScrollView contentContainerStyle={styles.form}>

          <Text style={styles.label}>Nome do empréstimo *</Text>
          <TextInput style={styles.input} value={nome} onChangeText={setNome} />

          <Text style={styles.label}>Provedor</Text>
          <TextInput style={styles.input} value={provedor} onChangeText={setProvedor} />

          <Text style={styles.label}>Valor (R$) *</Text>
          <TextInput style={styles.input} value={valor} onChangeText={setValor} />

          <Text style={styles.label}>Parcelas *</Text>
          <TextInput style={styles.input} value={parcelas} onChangeText={setParcelas} />

          <Text style={styles.label}>IOF (%)</Text>
          <TextInput style={styles.input} value={iof} onChangeText={setIof} />

          <EmprestimosButton
            title="Simular empréstimo →"
            onPress={simular}
            loading={loading}
          />

          {resultado && (
            <EmprestimosSimulacao resultado={resultado} />
          )}

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#faf5f6' },
  flex: { flex: 1 },

  form: {
    padding: Spacing.xl,
    paddingBottom: 60,
  },

  label: {
    fontSize: FontSize.base,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginTop: Spacing.lg,
    marginBottom: Spacing.xs,
  },

  input: {
    height: 50,
    borderRadius: Radius.xl,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: '#fff',
    paddingHorizontal: Spacing.lg,
    fontSize: FontSize.base,
    color: Colors.textPrimary,
    ...Shadow.card,
  },
});