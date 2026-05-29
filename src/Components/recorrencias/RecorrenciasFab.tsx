import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import {
  FontSize,
  Shadow,
} from '../../styles/theme';

interface Props {
  onPress: () => void;
}

export function RecorrenciasFab({
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <LinearGradient
        colors={['#ff3554', '#8f061d']}
        style={styles.fabGrad}
      >
        <Text style={styles.fabText}>
          +
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 28,
    right: 24,
    width: 58,
    height: 58,
    borderRadius: 29,
    overflow: 'hidden',
    ...Shadow.btn,
  },

  fabGrad: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fabText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 32,
  },
});