import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Colors,
  FontSize,
  Radius,
  Shadow,
  Spacing,
} from '../../styles/theme';

import type { Lancamento } from '../../types';

interface Props {
  item: Lancamento;
}

const formatBRL = (v: number) =>
  v.toLocaleString(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
    }
  );

const formatData = (iso: string) =>
  new Date(iso).toLocaleDateString(
    'pt-BR',
    {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }
  );

export function LancamentoCard({
  item,
}: Props) {
  const isNeg = item.valor < 0;

  return (
    <View style={styles.row}>
      <View
        style={[
          styles.rowDot,
          {
            backgroundColor:
              isNeg
                ? Colors.danger
                : Colors.success,
          },
        ]}
      />

      <View style={styles.rowInfo}>
        <Text
          style={styles.rowDesc}
          numberOfLines={1}
        >
          {item.descricao}
        </Text>

        <Text style={styles.rowDate}>
          {formatData(item.data)}
        </Text>
      </View>

      <Text
        style={[
          styles.rowVal,
          {
            color:
              isNeg
                ? Colors.danger
                : Colors.success,
          },
        ]}
      >
        {isNeg ? '−' : '+'}
        {' '}
        {formatBRL(Math.abs(item.valor))}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    backgroundColor: '#fff',
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    ...Shadow.card,
  },

  rowDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  rowInfo: {
    flex: 1,
  },

  rowDesc: {
    fontSize: FontSize.base,
    fontWeight: '700',
    color: Colors.textPrimary,
  },

  rowDate: {
    fontSize: FontSize.xs,
    color: Colors.textMuted,
    marginTop: 2,
  },

  rowVal: {
    fontSize: FontSize.base,
    fontWeight: '700',
  },
});