import { View, Text, TextInput } from 'react-native';
import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  View,
  StyleSheet,
} from 'react-native';

import {
  Colors,
  FontSize,
  Radius,
  Spacing,
} from '../../styles/theme';

interface InputProps extends TextInputProps {
  label: string;
}

export function Input({
  label,
  ...props
}: InputProps) {
  return (
    <View style={styles.fieldGroup}>
      <Text style={styles.fieldLabel}>
        {label}
      </Text>

      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.textMuted}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fieldGroup: {
    marginBottom: Spacing.lg,
  },

  fieldLabel: {
    fontSize: FontSize.base,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },

  input: {
    height: 50,
    borderRadius: Radius.xl,
    borderWidth: 1,
    borderColor: '#e8cdd4',
    backgroundColor: '#fff',
    paddingHorizontal: Spacing.lg,
    fontSize: FontSize.base,
    color: Colors.textPrimary,
  },
});
