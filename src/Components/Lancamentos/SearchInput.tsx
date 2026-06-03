import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import {
  Colors,
  FontSize,
  Radius,
  Spacing,
} from '../../styles/theme';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export function SearchInput({
  value,
  onChangeText,
}: Props) {
  return (
    <View style={styles.searchWrap}>
      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Buscar por descrição ou categoria..."
        placeholderTextColor={Colors.textMuted}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchWrap: {
    padding: Spacing.lg,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: Colors.border,
  },

  searchInput: {
    height: 44,
    borderRadius: Radius.xl,
    backgroundColor: '#fff8f9',
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: Spacing.lg,
    fontSize: FontSize.base,
    color: Colors.textPrimary,
  },
});