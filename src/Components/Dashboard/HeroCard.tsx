
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {
  Colors,
  FontSize,
  Radius,
  Shadow,
  Spacing,
} from '../../styles/theme';
import React = require('react');

interface Props {
  userName?: string;
  balance: number;
  onNovoLancamento: () => void;
  onNovaProjecao: () => void;
}

const formatBRL = (v: number) =>
  v.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

export function HeroCard({
  userName,
  balance,
  onNovoLancamento,
  onNovaProjecao,
}: Props) {
  return (
    <LinearGradient
      colors={['#2a0208', '#530816', '#220206']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.heroCard}
    >
      <Text style={styles.heroEye}>
        FINTECH COCKPIT
      </Text>

      <Text style={styles.heroTitle}>
        Olá, {userName ?? 'Midas'} 👋
      </Text>

      <Text style={styles.heroSub}>
        Saldo acumulado de todos os lançamentos
      </Text>

      <Text style={styles.heroBalance}>
        {formatBRL(balance)}
      </Text>

      <View style={styles.heroBtns}>
        <TouchableOpacity
          style={styles.heroBtnWhite}
          onPress={onNovoLancamento}
        >
          <Text style={styles.heroBtnWhiteText}>
            + Lançamento
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.heroBtnGold}
          onPress={onNovaProjecao}
        >
          <Text style={styles.heroBtnGoldText}>
            + Projeção
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    borderRadius: Radius.xl + 4,
    padding: Spacing.xl2,
    marginBottom: Spacing.lg,
    ...Shadow.hero,
  },

  heroEye: {
    fontSize: FontSize.xs,
    letterSpacing: 4,
    color: Colors.white55,
    fontWeight: '600',
    marginBottom: Spacing.sm,
  },

  heroTitle: {
    fontSize: FontSize.xl2,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },

  heroSub: {
    fontSize: FontSize.sm,
    color: Colors.white70,
    marginBottom: Spacing.md,
  },

  heroBalance: {
    fontSize: FontSize.xl4,
    fontWeight: '800',
    color: '#fff',
    marginBottom: Spacing.xl,
  },

  heroBtns: {
    flexDirection: 'row',
    gap: Spacing.md,
  },

  heroBtnWhite: {
    flex: 1,
    height: 44,
    borderRadius: Radius.xl,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heroBtnWhiteText: {
    color: Colors.wineDeep,
    fontWeight: '700',
    fontSize: FontSize.base,
  },

  heroBtnGold: {
    flex: 1,
    height: 44,
    borderRadius: Radius.xl,
    backgroundColor: Colors.goldLight,
    alignItems: 'center',
    justifyContent: 'center',
  },

  heroBtnGoldText: {
    color: '#260308',
    fontWeight: '700',
    fontSize: FontSize.base,
  },
});