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
  Spacing,
} from '../../styles/theme';

interface Props {
  ano: number;
  mes: number;
  onPrev: () => void;
  onNext: () => void;
}

const meses = [
  'Jan','Fev','Mar','Abr',
  'Mai','Jun','Jul','Ago',
  'Set','Out','Nov','Dez'
];

export function MonthSelector({
  ano,
  mes,
  onPrev,
  onNext,
}: Props) {
  return (
    <View style={styles.monthRow}>
      <TouchableOpacity
        onPress={onPrev}
        style={styles.monthBtn}
      >
        <Text style={styles.monthArrow}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.monthLabel}>
        {meses[mes - 1]} {ano}
      </Text>

      <TouchableOpacity
        onPress={onNext}
        style={styles.monthBtn}
      >
        <Text style={styles.monthArrow}>›</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  monthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.lg,
    marginBottom: Spacing.md,
  },

  monthBtn: {
    padding: Spacing.xs,
  },

  monthArrow: {
    fontSize: FontSize.xl2,
    color: Colors.goldLight,
    fontWeight: '700',
  },

  monthLabel: {
    fontSize: FontSize.lg,
    fontWeight: '700',
    color: '#fff',
  },
});