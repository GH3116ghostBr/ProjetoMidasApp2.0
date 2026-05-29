import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontSize, Spacing } from '../../styles/theme';
import type { Lancamento } from '../../types';

interface Props {
  item: Lancamento;
}

const formatBRL = (v: number) =>
  v.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

const formatData = (iso: string) =>
  new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
  });

export function TransactionItem({ item }: Props) {
  const isNeg = item.valor < 0;

  return (
    <View style={styles.row}>
      <View
        style={[
          styles.dot,
          {
            backgroundColor: isNeg
              ? Colors.danger
              : Colors.success,
          },
        ]}
      />

      <View style={styles.info}>
        <Text style={styles.desc} numberOfLines={1}>
          {item.descricao}
        </Text>

        <Text style={styles.date}>
          {formatData(item.data)}
        </Text>
      </View>

      <Text
        style={[
          styles.value,
          {
            color: isNeg
              ? Colors.danger
              : Colors.success,
          },
        ]}
      >
        {isNeg ? '-' : '+'}{' '}
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
    paddingVertical: Spacing.sm,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  info: {
    flex: 1,
  },

  desc: {
    fontSize: FontSize.base,
    fontWeight: '600',
    color: Colors.textPrimary,
  },

  date: {
    fontSize: FontSize.xs,
    color: Colors.textMuted,
    marginTop: 2,
  },

  value: {
    fontSize: FontSize.base,
    fontWeight: '700',
  },
});