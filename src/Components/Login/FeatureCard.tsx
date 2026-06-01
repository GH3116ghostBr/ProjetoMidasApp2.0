import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {
  Colors,
  FontSize,
  Radius,
  Spacing,
} from '../../styles/theme';

interface FeatureCardProps {
  label: string;
  value: string;
  color: string;
}

export function FeatureCard({
  label,
  value,
  color,
}: FeatureCardProps) {
  return (
    <View style={styles.card}>
      <View
        style={[
          styles.dot,
          { backgroundColor: color },
        ]}
      />

      <Text style={styles.label}>
        {label}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: Radius.xl,
    borderWidth: 1,
    borderColor: Colors.white10,
    backgroundColor: Colors.white06,
    padding: Spacing.md,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: Spacing.sm,
  },

  label: {
    fontSize: FontSize.xs,
    letterSpacing: 2.5,
    color: Colors.white55,
    fontWeight: '600',
    marginBottom: 4,
  },

  value: {
    fontSize: FontSize.lg,
    fontWeight: '700',
    color: '#fff',
  },
});