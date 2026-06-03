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

import { MonthSelector } from './MonthSelector';

interface Props {
  ano: number;
  mes: number;
  saldo: number;
  onPrevMes: () => void;
  onNextMes: () => void;
}

const formatBRL = (v: number) =>
  v.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

export function LancamentosHeader({
  ano,
  mes,
  saldo,
  onPrevMes,
  onNextMes,
}: Props) {
  return (
    <LinearGradient
      colors={['#2a0208', '#530816']}
      style={styles.headerGrad}
    >
      <Text style={styles.headerEye}>
        REALIZADOS
      </Text>

      <Text style={styles.headerTitle}>
        Lançamentos confirmados
      </Text>

      <MonthSelector
        ano={ano}
        mes={mes}
        onPrev={onPrevMes}
        onNext={onNextMes}
      />

      <View style={styles.balanceRow}>
        <Text style={styles.balanceLabel}>
          Saldo do mês
        </Text>

        <Text
          style={[
            styles.balanceVal,
            {
              color:
                saldo >= 0
                  ? Colors.goldLight
                  : '#ff7b8a',
            },
          ]}
        >
          {formatBRL(saldo)}
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerGrad: {
    paddingTop: 56,
    paddingBottom: Spacing.xl,
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

  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  balanceLabel: {
    fontSize: FontSize.sm,
    color: Colors.white55,
    fontWeight: '600',
  },

  balanceVal: {
    fontSize: FontSize.xl2,
    fontWeight: '800',
  },
});