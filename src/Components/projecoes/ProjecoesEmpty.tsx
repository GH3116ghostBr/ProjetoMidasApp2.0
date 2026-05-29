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
  Spacing,
} from '../../styles/theme';

interface Props {
  onNova: () => void;
}

export function ProjecoesEmpty({ onNova }: Props) {
  return (
    <View style={styles.empty}>
      <Text style={styles.emptyEmoji}>📭</Text>

      <Text style={styles.emptyText}>
        Nenhuma projeção para este mês.
      </Text>

      <TouchableOpacity
        style={styles.emptyBtn}
        onPress={onNova}
      >
        <Text style={styles.emptyBtnText}>
          Criar projeção
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  empty: {
    paddingTop: 80,
    alignItems: 'center',
    gap: Spacing.md,
  },

  emptyEmoji: {
    fontSize: 48,
  },

  emptyText: {
    fontSize: FontSize.base,
    color: Colors.textMuted,
  },

  emptyBtn: {
    marginTop: Spacing.md,
    paddingHorizontal: Spacing.xl2,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.wineButton,
    borderRadius: Radius.xl,
  },

  emptyBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: FontSize.base,
  },
});