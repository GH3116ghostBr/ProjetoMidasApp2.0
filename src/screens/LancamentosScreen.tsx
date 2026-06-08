import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Colors, FontSize, Radius, Shadow, Spacing } from '../styles/theme';
import { lancamentosService } from '../services/lancamentos/lancamentosServices';
import type { Lancamento } from '../types';
import { LancamentoCard } from '../components/Lancamentos/LancamentoCard';
import { SearchInput } from '../components/Lancamentos/SearchInput';
import { MonthSelector } from '../components/Lancamentos/MonthSelector';
import { FloatingActionButton } from '../components/Lancamentos/FAB';
import { LancamentosHeader } from '../components/Lancamentos/Header';

const formatData = (iso: string) => new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });

interface Props { onNovo: () => void; }

export function LancamentosScreen({ onNovo }: Props) {
  const hoje = new Date();
  const [anoSel,  setAnoSel]  = useState(hoje.getFullYear());
  const [mesSel,  setMesSel]  = useState(hoje.getMonth() + 1);
  const [itens,   setItens]   = useState<Lancamento[]>([]);
  const [query,   setQuery]   = useState('');
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const load = useCallback(async () => {
    try {
      const data = await lancamentosService.getByMes(anoSel, mesSel);
      setItens(data);
    } catch (_) {}
    finally { setLoading(false); setRefresh(false); }
  }, [anoSel, mesSel]);

  useEffect(() => { setLoading(true); load(); }, [load]);

  const filtrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return itens;
    return itens.filter((l) =>
      l.descricao?.toLowerCase().includes(q) ||
      l.categoria?.toLowerCase().includes(q)
    );
  }, [query, itens]);

  const totalRealizados = useMemo(
    () => itens.reduce((s, l) => s + l.valor, 0),
    [itens]
  );

  const mudarMes = (delta: number) => {
    let m = mesSel + delta;
    let a = anoSel;
    if (m > 12) { m = 1;  a++; }
    if (m < 1)  { m = 12; a--; }
    setMesSel(m); setAnoSel(a);
  };

    const renderItem = ({ item }: { item: Lancamento }) => (
      <LancamentoCard item={item} />
    );

  return (
    <View style={styles.root}>
      {/* ── Cabeçalho Midas ──────────────────────────────── */}
      <LancamentosHeader
        ano={anoSel}
        mes={mesSel}
        saldo={totalRealizados}
        onPrevMes={() => mudarMes(-1)}
        onNextMes={() => mudarMes(+1)}
      />

      {/* ── Busca ────────────────────────────────────────── */}
      <SearchInput
      value={query}
      onChangeText={setQuery}
      />

      {/* ── Lista ────────────────────────────────────────── */}
      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator color={Colors.wineButton} />
        </View>
      ) : (
        <FlatList
          data={filtrados}
          keyExtractor={(l) => String(l.idLancamento)}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={styles.sep} />}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={() => { setRefresh(true); load(); }} tintColor={Colors.wineButton} />
          }
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyText}>Nenhum lançamento encontrado.</Text>
            </View>
          }
        />
      )}

      {/* ── FAB ──────────────────────────────────────────── */}
      <FloatingActionButton
      onPress={onNovo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#faf5f6' },

  // Lista
  list:    { padding: Spacing.lg },
  sep:     { height: Spacing.sm },

  // Empty / loading
  center:    { flex: 1, alignItems: 'center', justifyContent: 'center' },
  empty:     { paddingVertical: 60, alignItems: 'center' },
  emptyText: { color: Colors.textMuted, fontSize: FontSize.base },

});
