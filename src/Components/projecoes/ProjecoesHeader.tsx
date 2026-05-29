import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Colors, FontSize, Spacing } from '../../styles/theme';

interface Props {
  ano: number;
  mes: number;
  totalPrevisto: number;
  quantidade: number;
  onPrev: () => void;
  onNext: () => void;
}

const meses = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

const formatBRL = (v: number) =>
  v.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

export function ProjecoesHeader({
  ano,
  mes,
  totalPrevisto,
  quantidade,
  onPrev,
  onNext,
}: Props) {
  return (
    <LinearGradient
      colors={['#1a0305', '#4a0a18']}
      style={styles.headerGrad}
    >
      <Text style={styles.headerEye}>PROJETADOS</Text>

      <Text style={styles.headerTitle}>
        Compromissos futuros
      </Text>

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

      <View style={styles.summaryRow}>
        <View>
          <Text style={styles.summaryLabel}>
            Total previsto
          </Text>

          <Text style={styles.summaryVal}>
            {formatBRL(totalPrevisto)}
          </Text>
        </View>

        <View>
          <Text style={styles.summaryLabel}>
            Lançamentos
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