import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FontSize, Radius, Shadow, Spacing } from '../../styles/theme';

interface Props {
  label: string;
  value: string;
  color: string;
  bg: string;
}

export function MetricCard({
  label,
  value,
  color,
  bg,
}: Props) {
  return (
    <View style={[styles.card, Shadow.card]}>
      <Text style={styles.label}>{label}</Text>

      <Text style={[styles.value, { color }]}>
        {value}
      </Text>

      <View
        style={[
          styles.bar,
          { backgroundColor: bg },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },

  label: {
    fontSize: FontSize.xs,
    color: Colors.textMuted,
    fontWeight: '600',
    marginBottom: 4,
  },

  value: {
    fontSize: FontSize.md,
    fontWeight: '700',
  },

  bar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
  },
});