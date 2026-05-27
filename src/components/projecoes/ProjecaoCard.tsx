import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, FontSize, Radius, Shadow, Spacing } from '../../styles/theme';
import type { Projecao } from '../../types';

interface Props {
  item: Projecao;
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
    year: 'numeric',
  });

export function ProjecaoCard({ item }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.rowIcon}>
        <Text style={styles.rowIconText}>📅</Text>
      </View>

      <View style={styles.rowInfo}>
        <Text style={styles.rowDesc} numberOfLines={1}>
          {item.descricao}
        </Text>

        <Text style={styles.rowDate}>
          {formatData(item.dataReferencia)}
        </Text>
      </View>

      <Text style={styles.rowVal}>
        {formatBRL(item.valorPrevisto)}
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

  rowIcon: {
    width: 40,
    height: 40,
    borderRadius: Radius.md,
    backgroundColor: Colors.warningBg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rowIconText: {
    fontSize: 18,
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
    color: Colors.warning,
  },
});