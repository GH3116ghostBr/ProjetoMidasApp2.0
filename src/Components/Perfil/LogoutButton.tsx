import React from 'react';
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  Colors,
  FontSize,
  Radius,
  Shadow,
  Spacing,
} from '../../styles/theme';

interface Props {
  logout: () => void;
}

export function LogoutButton({ logout }: Props) {
  const handleLogout = () => {
    Alert.alert('Sair do Midas', 'Deseja encerrar a sessão?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sair', style: 'destructive', onPress: logout },
    ]);
  };

  return (
    <TouchableOpacity
      style={styles.btnLogout}
      onPress={handleLogout}
      activeOpacity={0.8}
    >
      <Text style={styles.btnLogoutText}>
        Sair da conta
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnLogout: {
    height: 52,
    borderRadius: Radius.xl,
    borderWidth: 1.5,
    borderColor: Colors.wineButton,
    backgroundColor: '#fde4e9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnLogoutText: {
    color: Colors.wineButton,
    fontSize: FontSize.base,
    fontWeight: '700',
  },
});