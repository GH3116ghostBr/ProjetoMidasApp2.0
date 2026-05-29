import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spacing } from '../../styles/theme';
import { MetricCard } from './MetricCard';

interface Metric {
  label: string;
  value: string;
  color: string;
  bg: string;
}

interface Props {
  metrics: Metric[];
}

export function MetricsGrid({ metrics }: Props) {
  return (
    <View style={styles.row}>
      {metrics.map((m) => (
        <View key={m.label} style={styles.item}>
          <MetricCard
            label={m.label}
            value={m.value}
            color={m.color}
            bg={m.bg}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    marginBottom: Spacing.lg,
  },

  item: {
    width: '48%',
  },
});