import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import {
  Colors,
  FontSize,
  Spacing,
} from '../../styles/theme';

interface Props {
  onVoltar: () => void;
}

export function NovoLancamentoHeader({
  onVoltar,
}: Props) {
  return (
    <LinearGradient
      colors={['#2a0208', '#530816']}
      style={styles.headerGrad}
    >
      <TouchableOpacity
        onPress={onVoltar}
        style={styles.backBtn}
      >
        <Text style={styles.backText}>
          ← Voltar
        </Text>
      </TouchableOpacity>

      <Text style={styles.headerEye}>
        NOVO
      </Text>

      <Text style={styles.headerTitle}>
        Registrar lançamento
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerGrad: {
    paddingTop: 56,
    paddingBottom: Spacing.xl2,
    paddingHorizontal: Spacing.xl,
  },

  backBtn: {
    marginBottom: Spacing.md,
  },

  backText: {
    color: Colors.goldLight,
    fontSize: FontSize.base,
    fontWeight: '600',
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
  },
});