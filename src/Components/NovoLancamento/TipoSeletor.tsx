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

type Tipo = 'Receita' | 'Despesa';

interface Props {
  value: Tipo;
  onChange: (tipo: Tipo) => void;
}

export function TipoSelector({
  value,
  onChange,
}: Props) {
  return (
    <View style={styles.toggleRow}>
      {(['Receita', 'Despesa'] as const).map((tipo) => (
        <TouchableOpacity
          key={tipo}
          style={[
            styles.toggleBtn,
            value === tipo &&
              getActiveStyle(tipo),
          ]}
          onPress={() => onChange(tipo)}
        >
          <Text
            style={[
              styles.toggleText,
              value === tipo &&
                styles.toggleTextActive,
            ]}
          >
            {tipo === 'Receita'
              ? '↑ Receita'
              : '↓ Despesa'}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const getActiveStyle = (
  tipo: 'Receita' | 'Despesa'
) => ({
  backgroundColor:
    tipo === 'Receita'
      ? Colors.successBg
      : Colors.dangerBg,

  borderColor:
    tipo === 'Receita'
      ? Colors.success
      : Colors.danger,
});

const styles = StyleSheet.create({
  toggleRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },

  toggleBtn: {
    flex: 1,
    height: 48,
    borderRadius: Radius.xl,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  toggleText: {
    fontSize: FontSize.base,
    fontWeight: '600',
    color: Colors.textMuted,
  },

  toggleTextActive: {
    color: Colors.textPrimary,
  },
});