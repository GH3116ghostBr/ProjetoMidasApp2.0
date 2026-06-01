import React, { useState } from 'react';
import {
  Alert, KeyboardAvoidingView, Platform,
  ScrollView, StyleSheet, Text,View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, FontSize, Radius, Shadow, Spacing} from '../styles/theme';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Login/Button';
import { Input } from '../components/Login/Input';
import { FeatureCard } from '../components/Login/FeatureCard';
import { LoginHeader } from '../components/Login/LoginHeader';

interface Props {
  onGoRegister: () => void;
}

export function LoginScreen({ onGoRegister }: Props) {
  const { login } = useAuth();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!usuario.trim() || !senha.trim()) {
      Alert.alert('Atenção', 'Preencha usuário e senha.');
      return;
    }
    setLoading(true);
    try {
      await login(usuario.trim(), senha);
    } catch (e: any) {
      Alert.alert('Erro ao entrar', e?.response?.data || 'Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#170105', '#3c0610', '#120104']}
      start={{ x: 0.15, y: 0 }}
      end={{ x: 0.85, y: 1 }}
      style={styles.root}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

          {/* ── Header / marca ──────────────────────────────── */}
          
          <LoginHeader />

          {/* ── Cards de features ───────────────────────────── */}
            <View style={styles.featureRow}>
            {[
            { label: 'CASH VIEW', value: '6 meses', color: Colors.goldLight },
            { label: 'ALERTAS', value: 'Tempo real', color: '#ff5e78' },
            { label: 'STATUS', value: 'Claros', color: '#60d394' },
            ].map((f) => (
            <FeatureCard
            key={f.label}
            label={f.label}
            value={f.value}
            color={f.color}
            />
            ))}
          </View>
          {/* ── Painel de login ─────────────────────────────── */}

          <Input
            label="Usuário"
            placeholder="Digite seu usuário"
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Input
            label="Senha"
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          {<View style={styles.panel}>
            <Text style={styles.panelEyebrow}>ENTRAR</Text>
            <Text style={styles.panelTitle}>Acesse seu cockpit financeiro</Text>
            <Text style={styles.panelSub}>
             Use seu usuário e senha para visualizar indicadores, confirmar projetados e monitorar empréstimos.
            </Text>
            

          {/* Botão primário */}
          <Button
            title="Entrar no painel"
            onPress={handleLogin}
            loading={loading}
          />

          {/* Botão secundário */}
          <Button
            title="Criar conta"
            onPress={onGoRegister}
          />

        </View>}
        </ScrollView>
      </KeyboardAvoidingView>
</LinearGradient >
);
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  flex: { flex: 1 },
  scroll: { flexGrow: 1, padding: Spacing.xl, paddingTop: 60 },
  
  // Painel branco
  panel: {
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderRadius: Radius.xl + 4,
    padding: Spacing.xl2,
    ...Shadow.hero,
  },
  panelEyebrow: {
    fontSize: FontSize.xs, letterSpacing: 4, fontWeight: '700',
    color: Colors.textLabel, marginBottom: Spacing.sm,
  },
  panelTitle: {
    fontSize: FontSize.xl2, fontWeight: '700',
    color: Colors.textPrimary, marginBottom: Spacing.sm,
    lineHeight: 30,
  },
  panelSub: {
    fontSize: FontSize.sm, color: Colors.textBody,
    lineHeight: 20, marginBottom: Spacing.xl2,
  },

  featureRow: {
  flexDirection: 'row',
  gap: Spacing.sm,
  marginBottom: Spacing.xl3,
  },

});
