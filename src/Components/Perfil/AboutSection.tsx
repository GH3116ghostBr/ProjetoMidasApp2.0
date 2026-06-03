import React from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import {
  Colors,
  FontSize,
  Radius,
  Shadow,
  Spacing,
} from '../../styles/theme';

export function AboutSection() {
  const infos = [
    { label: 'Versão do app', value: '1.0.0' },
    {
      label: 'Plataforma',
      value: Platform.OS === 'ios' ? 'iOS' : 'Android',
    },
    {
      label: 'API',
      value: 'ASP.NET Core + SQL Server',
    },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionEye}>SOBRE</Text>
      <Text style={styles.sectionTitle}>Projeto Midas</Text>

      {infos.map((info) => (
        <View key={info.label} style={styles.infoRow}>
          <Text style={styles.infoLabel}>{info.label}</Text>
          <Text style={styles.infoValue}>{info.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    borderRadius: Radius.xl,
    padding: Spacing.xl,
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Shadow.card,
  },

  sectionEye: {
    fontSize: FontSize.xs,
    letterSpacing: 3,
    color: Colors.textMuted,
    fontWeight: '700',
    marginBottom: 4,
  },

  sectionTitle: {
    fontSize: FontSize.lg,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.lg,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.sm,
    borderTopWidth: 1,
    borderColor: Colors.borderLight,
  },

  infoLabel: {
    fontSize: FontSize.base,
    color: Colors.textMuted,
  },

  infoValue: {
    fontSize: FontSize.base,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
});