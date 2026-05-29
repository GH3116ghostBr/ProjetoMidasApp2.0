import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, FontSize, Spacing } from '../../styles/theme';

interface Props {
  eye: string;
  title: string;
  actionText?: string;
  onPress?: () => void;
}

export function SectionHeader({
  eye,
  title,
  actionText,
  onPress,
}: Props) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.eye}>{eye}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      {actionText && (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.link}>
            {actionText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: Spacing.lg,
  },

  eye: {
    fontSize: FontSize.xs,
    letterSpacing: 3,
    color: Colors.textMuted,
    fontWeight: '700',
  },

  title: {
    fontSize: FontSize.lg,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginTop: 2,
  },

  link: {
    fontSize: FontSize.sm,
    color: Colors.wineButton,
    fontWeight: '600',
  },
});