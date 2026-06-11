import React from 'react';
import {
  Alert,
  Platform,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  Colors,
  FontSize,
  Radius,
} from '../../styles/theme';

interface Props {
  logout: () => void;
}

export function LogoutButton({ logout }: Props) {
  const handleLogout = () => {
    if (Platform.OS === 'web') {
      const confirmar = window.confirm(
        'Deseja encerrar a sessão?'
      );

      if (confirmar) {
        logout();
      }

      return;
    }

    Alert.alert(
      'Sair do Midas',
      'Deseja encerrar a sessão?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: logout,
        },
      ]
    );
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