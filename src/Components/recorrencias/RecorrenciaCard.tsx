import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Colors,
  FontSize,
  Radius,
  Shadow,
  Spacing,
} from '../../styles/theme';

import type { Recorrencia } from '../../types';

interface Props {
  item: Recorrencia;
  onDelete: (
    id: number,
    descricao: string
  ) => void;
}

const formatBRL = (v: number) =>
  v.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

const iconePorTipo = (nome?: string) => {
  const n = (nome ?? '').toLowerCase();

  if (n.includes('mensal')) return '📅';

  if (n.includes('semanal')) return '🔁';

  if (n.includes('anual')) return '📆';

  if (
    n.includes('diária') ||
    n.includes('diario')
  )
    return '🔄';

  return '↩';
};

export function RecorrenciaCard({
  item,
  onDelete,
}: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.rowIcon}>
        <Text style={styles.rowIconText}>
          {iconePorTipo(
            item.tipoRecorrencia?.nome
          )}
        </Text>
      </View>

      <View style={styles.rowInfo}>
        <Text
          style={styles.rowDesc}
          numberOfLines={1}
        >
          {item.descricao}
        </Text>

        <Text style={styles.rowTipo}>
          {item.tipoRecorrencia?.nome ??
            'Recorrência'}
        </Text>
      </View>

      <View style={styles.rowRight}>
        <Text style={styles.rowVal}>
          {formatBRL(item.valor)}
        </Text>

        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() =>
            onDelete(
              item.idRecorrente!,
              item.descricao
            )
          }
        >
          <Text style={styles.deleteBtnText}>
            ✕
          </Text>
        </TouchableOpacity>
      </View>
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
    width: 44,
    height: 44,
    borderRadius: Radius.md,
    backgroundColor: '#fde4e9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rowIconText: {
    fontSize: 20,
  },

  rowInfo: {
    flex: 1,
  },

  rowDesc: {
    fontSize: FontSize.base,
    fontWeight: '700',
    color: Colors.textPrimary,
  },

  rowTipo: {
    fontSize: FontSize.xs,
    color: Colors.textMuted,
    marginTop: 2,
  },

  rowRight: {
    alignItems: 'flex-end',
    gap: Spacing.xs,
  },

  rowVal: {
    fontSize: FontSize.base,
    fontWeight: '700',
    color: Colors.wineButton,
  },

  deleteBtn: {
    padding: Spacing.xs,
  },

  deleteBtnText: {
    fontSize: FontSize.sm,
    color: Colors.textMuted,
  },
});