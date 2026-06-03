import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  FontSize,
  Radius,
  Shadow,
  Spacing,
} from '../../styles/theme';

import type { Emprestimo } from '../../types';

interface Props {
  resultado: Emprestimo;
}

const formatBRL = (v?: number) =>
  (v ?? 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

export function EmprestimosSimulacao({
  resultado,
}: Props) {
  return (
    <View style={styles.resultCard}>
      <Text style={styles.resultTitle}>
        Resultado da simulação
      </Text>

      <Text style={styles.resultName}>
        {resultado.nomeEmprestimo}
      </Text>

      {[
        {
          label: 'Valor solicitado',
          value: formatBRL(
            resultado.valorEmprestimo
          ),
        },

        {
          label: 'Parcelas',
          value: `${resultado.parcelasEmprestimo}x ${formatBRL(resultado.valorParcela)}`,
        },

        {
          label: 'Total a pagar',
          value: formatBRL(
            resultado.valorTotal
          ),
          highlight: true,
        },
      ].map((r) => (
        <View
          key={r.label}
          style={styles.resultRow}
        >
          <Text style={styles.resultLabel}>
            {r.label}
          </Text>

          <Text
            style={[
              styles.resultVal,

              r.highlight && {
                color: Colors.wineButton,
                fontSize: FontSize.xl,
              },
            ]}
          >
            {r.value}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  resultCard: {
    marginTop: Spacing.xl2,
    backgroundColor: '#fff',
    borderRadius: Radius.xl,
    padding: Spacing.xl,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Shadow.hero,
  },

  resultTitle: {
    fontSize: FontSize.xs,
    letterSpacing: 3,
    color: Colors.textMuted,
    fontWeight: '700',
    marginBottom: Spacing.xs,
  },

  resultName: {
    fontSize: FontSize.lg,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: Spacing.lg,
  },

  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    borderTopWidth: 1,
    borderColor: Colors.borderLight,
  },

  resultLabel: {
    fontSize: FontSize.base,
    color: Colors.textMuted,
  },

  resultVal: {
    fontSize: FontSize.base,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
});