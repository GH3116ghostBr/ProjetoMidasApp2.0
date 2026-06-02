import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  Colors,
  FontSize,
  Radius,
  Shadow,
  Spacing,
} from '../../styles/theme';

interface Props {
  userName?: string;
}

export function ProfileHeader({ userName }: Props) {
  return (
    <View style={styles.headerGrad}>
      <View style={styles.avatar}>
        <Text style={styles.avatarLetter}>
          {(userName ?? 'M').slice(0, 1).toUpperCase()}
        </Text>
      </View>

      <Text style={styles.userName}>
        {userName ?? 'Usuário Midas'}
      </Text>

      <Text style={styles.userSub}>
        Controle de caixa em tempo real
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerGrad: {
    paddingTop: 64,
    paddingBottom: Spacing.xl3,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    backgroundColor: Colors.wineDeep,
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
    ...Shadow.btn,
  },

  avatarLetter: {
    fontSize: FontSize.xl3,
    fontWeight: '800',
    color: Colors.wineDeep,
  },

  userName: {
    fontSize: FontSize.xl2,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },

  userSub: {
    fontSize: FontSize.sm,
    color: Colors.white55,
  },
});