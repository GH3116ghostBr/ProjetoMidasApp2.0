import { Alert, Platform } from 'react-native';

export function showConfirm(
  title: string,
  message: string,
  onConfirm: () => void
) {
  if (Platform.OS === 'web') {
    if (window.confirm(`${title}\n\n${message}`)) {
      onConfirm();
    }

    return;
  }

  Alert.alert(title, message, [
    {
      text: 'Cancelar',
      style: 'cancel',
    },
    {
      text: 'Confirmar',
      onPress: onConfirm,
    },
  ]);
}