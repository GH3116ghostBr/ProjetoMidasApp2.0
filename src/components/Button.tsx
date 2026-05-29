import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export function Button({
  title,
  onPress,
  loading = false,
  disabled = false,
}: ButtonProps) {

return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#8f061d',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  disabled: {
    opacity: 0.6,
  },

  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});