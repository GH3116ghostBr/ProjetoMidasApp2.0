import React from 'react';
import { View, Text } from 'react-native';
import type { Lancamento } from '../../types';
import { TransactionItem } from './TransactionItem';

interface Props {
  items: Lancamento[];
}

export function TransactionsList({ items }: Props) {
  if (!items || items.length === 0) {
    return (
      <View>
        <Text>Nenhum lançamento este mês.</Text>
      </View>
    );
  }

  return (
    <View>
      {items.map((item) => (
        <View key={String(item.idLancamento)}>
          <TransactionItem item={item} />
        </View>
      ))}
    </View>
  );
}