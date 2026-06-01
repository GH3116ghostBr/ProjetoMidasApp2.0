import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {
  Colors,
  FontSize,
  Radius,
  Shadow,
  Spacing,
} from '../../styles/theme';

export function LoginHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.logoCircle}>
        <Text style={styles.logoLetter}>M</Text>
      </View>

      <View style={styles.headerText}>
        <Text style={styles.brandLabel}>
          MIDAS FINANCE
        </Text>

        <Text style={styles.brandTitle}>
          Cockpit financeiro
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    marginBottom: Spacing.xl3,
  },

  logoCircle: {
    width: 56,
    height: 56,
    borderRadius: Radius.full,
    backgroundColor: Colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadow.btn,
  },

  logoLetter: {
    fontSize: FontSize.xl2,
    fontWeight: '700',
    color: Colors.wineDeep,
  },

  headerText: {
    flex: 1,
  },

  brandLabel: {
    fontSize: FontSize.xs,
    letterSpacing: 4,
    color: Colors.white55,
    fontWeight: '600',
  },

  brandTitle: {
    fontSize: FontSize.xl2,
    fontWeight: '700',
    color: '#fff',
    marginTop: 2,
  },
});