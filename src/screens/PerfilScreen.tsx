import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';

import { useAuth } from '../context/AuthContext';

import { ProfileHeader } from '../components/Perfil/ProfileHeader';
import { SecuritySection } from '../components/Perfil/SecuritySection';
import { AboutSection } from '../components/Perfil/AboutSection';
import { LogoutButton } from '../components/Perfil/LogoutButton';

import {
  Colors,
  Spacing,
} from '../styles/theme';

export function PerfilScreen() {
  const { userName, logout } = useAuth();

  return (
    <View style={styles.root}>
      <ProfileHeader userName={userName ?? undefined} />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <SecuritySection userName={userName ?? undefined} />

          <AboutSection />

          <LogoutButton logout={logout} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#faf5f6',
  },

  flex: {
    flex: 1,
  },

  content: {
    padding: Spacing.xl,
    paddingBottom: 60,
  },
});