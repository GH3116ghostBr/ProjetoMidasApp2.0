import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import {
  Colors,
  FontSize,
  Spacing,
} from '../../styles/theme';

interface Props {
  totalMensal: number;
  quantidade: number;
}

const formatBRL = (v: number) =>
  v.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

export function RecorrenciasHeader({
  totalMensal,
  quantidade,
}: Props) {
  return (
    <LinearGradient
      colors={['#12030a', '#3d0b1a']}
      style={styles.headerGrad}
    >
      <Text style={styles.headerEye}>
        RECORRÊNCIAS
      </Text>

      <Text style={styles.headerTitle}>
        Compromissos regulares
      </Text>

      <View style={styles.summaryRow}>
        <View>
          <Text style={styles.summaryLabel}>
            Total cadastrado
          </Text>

          <Text style={styles.summaryVal}>
            {formatBRL(totalMensal)}
          </Text>
        </View>

        <View>
          <Text style={styles.summaryLabel}>
            Recorrências
          </Text>

          <Text style={styles.summaryVal}>
            {quantidade}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerGrad: {
    paddingTop: 56,
    paddingBottom: Spacing.xl2,
    paddingHorizontal: Spacing.xl,
  },

  headerEye: {
    fontSize: FontSize.xs,
    letterSpacing: 4,
    color: Colors.white55,
    fontWeight: '700',
    marginBottom: 4,
  },

  headerTitle: {
    fontSize: FontSize.xl3,
    fontWeight: '800',
    color: '#fff',
    marginBottom: Spacing.lg,
  },

  summaryRow: {
    flexDirection: 'row',
    gap: Spacing.xl2,
  },

  summaryLabel: {
    fontSize: FontSize.xs,
    color: Colors.white55,
    fontWeight: '600',
    marginBottom: 2,
  },

  summaryVal: {
    fontSize: FontSize.xl2,
    fontWeight: '800',
    color: '#fff',
  },
});