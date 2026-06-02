import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import {
  FontSize,
  Radius,
  Shadow,
} from '../styles/theme';

interface Props extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

export function EmprestimosButton({
  title,
  loading = false,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      {...rest}
      disabled={loading}
      activeOpacity={0.85}
      style={[
        styles.button,
        loading && styles.disabled,
      ]}
    >
      <LinearGradient
        colors={['#ff3554', '#8f061d']}
        style={styles.gradient}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.text}>
            {title}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
    borderRadius: Radius.xl,
    overflow: 'hidden',
    ...Shadow.btn,
  },

  disabled: {
    opacity: 0.6,
  },

  gradient: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
    fontSize: FontSize.md,
    fontWeight: '700',
  },
});