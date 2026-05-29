import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontSize, Radius, Spacing } from '../../styles/theme';

interface Props {
  icon: string;
  label: string;
  value: number;
  bg: string;
  color: string;
}

export function RadarCard({
  icon,
  label,
  value,
  bg,
  color,
}: Props) {
  return (
    <View style={[styles.card, { backgroundColor: bg }]}>
      <Text style={styles.icon}>{icon}</Text>

      <Text style={[styles.value, { color }]}>
        {value}
      </Text>

      <Text style={[styles.label, { color }]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    alignItems: 'center',
  },

  icon: {
    fontSize: 24,
    marginBottom: Spacing.xs,
  },

  value: {
    fontSize: FontSize.xl3,
    fontWeight: '800',
  },

  label: {
    fontSize: FontSize.xs,
    fontWeight: '600',
    marginTop: 2,
  },
});