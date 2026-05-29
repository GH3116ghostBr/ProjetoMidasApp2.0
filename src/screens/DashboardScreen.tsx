import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { useAuth } from '../context/AuthContext';
import { Colors, FontSize, Spacing } from '../styles/theme';

import { lancamentosService, projecoesService } from '../api/services';
import type { Lancamento, Projecao } from '../types';

import { HeroCard } from '../Components/Dashboard/HeroCard';
import { MetricsGrid } from '../Components/Dashboard/MetricsGrid';
import { TransactionsList } from '../Components/Dashboard/TransactionsList';
import { SectionHeader } from '../Components/Dashboard/SectionHeader';


// ── helpers ─────────────────────────────
const formatBRL = (v: number) =>
  v.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

export function DashboardScreen({ onNavigate }: any) {
  const { userName } = useAuth();

  const [lancamentos, setLancamentos] = useState<Lancamento[]>([]);
  const [projecoes, setProjecoes] = useState<Projecao[]>([]);
  const [somatoria, setSomatoria] = useState(0);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    try {
      const hoje = new Date();

      const [lancs, prjs, soma] = await Promise.all([
        lancamentosService.getByMes(
          hoje.getFullYear(),
          hoje.getMonth() + 1
        ),
        projecoesService.getByMes(
          hoje.getFullYear(),
          hoje.getMonth() + 1
        ),
        lancamentosService.getSomatoria(),
      ]);

      setLancamentos(lancs);
      setProjecoes(prjs);
      setSomatoria(soma);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  // ── cálculos ───────────────────────────
  const totalEntradas = lancamentos
    .filter((l) => l.valor > 0)
    .reduce((s, l) => s + l.valor, 0);

  const totalSaidas = lancamentos
    .filter((l) => l.valor < 0)
    .reduce((s, l) => s + Math.abs(l.valor), 0);

  const saldoMes = totalEntradas - totalSaidas;

  const totalProjetado = projecoes.reduce(
    (s, p) => s + p.valorPrevisto,
    0
  );

  const ultimos = [...lancamentos]
    .sort(
      (a, b) =>
        new Date(b.data).getTime() -
        new Date(a.data).getTime()
    )
    .slice(0, 5);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator color={Colors.gold} />
        <Text style={{ marginTop: Spacing.md }}>
          Carregando...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            load();
          }}
          tintColor={Colors.gold}
        />
      }
    >
      {/* HERO */}
      <HeroCard
        userName={userName ?? undefined}
        balance={somatoria}
        onNovoLancamento={() =>
          onNavigate('NovoLancamento')
        }
        onNovaProjecao={() =>
          onNavigate('NovaProjecao')
        }
      />

      {/* MÉTRICAS (sem key aqui!) */}
      <MetricsGrid
        metrics={[
          {
            label: 'Entradas',
            value: formatBRL(totalEntradas),
            color: Colors.success,
            bg: '#d1fae5',
          },
          {
            label: 'Saídas',
            value: formatBRL(totalSaidas),
            color: Colors.danger,
            bg: '#fee2e2',
          },
          {
            label: 'Saldo mês',
            value: formatBRL(saldoMes),
            color: Colors.wineButton,
            bg: '#fde4e9',
          },
          {
            label: 'Projetado',
            value: formatBRL(totalProjetado),
            color: Colors.warning,
            bg: '#fef3c7',
          },
        ]}
      />

      {/* TRANSAÇÕES */}
      <View
        style={{
          backgroundColor: '#fff',
          margin: Spacing.lg,
          padding: Spacing.lg,
          borderRadius: 12,
        }}
      >
        <SectionHeader
          eye="TIMELINE"
          title="Últimos movimentos"
          actionText="Ver todos →"
          onPress={() => onNavigate('Lancamentos')}
        />

        <TransactionsList items={ultimos} />
      </View>
    </ScrollView>
  );
}