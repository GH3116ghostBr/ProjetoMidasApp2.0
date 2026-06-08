import React, { useState } from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Colors,
  FontSize,
  Radius,
  Shadow,
  Spacing,
} from '../../styles/theme';
import { authService } from '../../services/auth/AuthServices';

interface Props {
  userName?: string;
}

export function SecuritySection({ userName }: Props) {
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [loadingSenha, setLoadingSenha] = useState(false);

  const handleAlterarSenha = async () => {
    if (!novaSenha.trim()) {
      Alert.alert('Atenção', 'Informe a nova senha.');
      return;
    }

    if (novaSenha !== confirmar) {
      Alert.alert('Atenção', 'As senhas não coincidem.');
      return;
    }

    if (novaSenha.length < 4) {
      Alert.alert('Atenção', 'Senha muito curta (mín. 4 caracteres).');
      return;
    }

    setLoadingSenha(true);

    try {
      await authService.alterarSenha(userName!, novaSenha);

      Alert.alert('Sucesso', 'Senha alterada com sucesso!');

      setNovaSenha('');
      setConfirmar('');
    } catch (e: any) {
      Alert.alert(
        'Erro',
        e?.response?.data || 'Não foi possível alterar a senha.'
      );
    } finally {
      setLoadingSenha(false);
    }
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionEye}>SEGURANÇA</Text>
      <Text style={styles.sectionTitle}>Alterar senha</Text>

      <Text style={styles.label}>Nova senha</Text>
      <TextInput
        style={styles.input}
        value={novaSenha}
        onChangeText={setNovaSenha}
        secureTextEntry
        placeholder="Mínimo 4 caracteres"
        placeholderTextColor={Colors.textMuted}
      />

      <Text style={styles.label}>Confirmar senha</Text>
      <TextInput
        style={styles.input}
        value={confirmar}
        onChangeText={setConfirmar}
        secureTextEntry
        placeholder="Repita a senha"
        placeholderTextColor={Colors.textMuted}
      />

      <TouchableOpacity
        style={[
          styles.btnPrimary,
          loadingSenha && { opacity: 0.6 },
        ]}
        onPress={handleAlterarSenha}
        disabled={loadingSenha}
      >
        <LinearGradient
          colors={['#ff3554', '#8f061d']}
          style={styles.btnGrad}
        >
          <Text style={styles.btnPrimaryText}>
            {loadingSenha ? 'Salvando...' : 'Salvar nova senha'}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    borderRadius: Radius.xl,
    padding: Spacing.xl,
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Shadow.card,
  },

  sectionEye: {
    fontSize: FontSize.xs,
    letterSpacing: 3,
    color: Colors.textMuted,
    fontWeight: '700',
    marginBottom: 4,
  },

  sectionTitle: {
    fontSize: FontSize.lg,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Spacing.lg,
  },

  label: {
    fontSize: FontSize.base,
    fontWeight: '600',
    marginTop: Spacing.md,
    marginBottom: Spacing.xs,
    color: Colors.textPrimary,
  },

  input: {
    height: 50,
    borderRadius: Radius.xl,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: Spacing.lg,
    backgroundColor: Colors.surfaceLight,
    fontSize: FontSize.base,
  },

  btnPrimary: {
    marginTop: Spacing.lg,
    borderRadius: Radius.xl,
    overflow: 'hidden',
    ...Shadow.btn,
  },

  btnGrad: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnPrimaryText: {
    color: '#fff',
    fontWeight: '700',
  },
});