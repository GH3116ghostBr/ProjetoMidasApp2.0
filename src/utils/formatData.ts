export function formatData(data: string) {
  return new Date(data).toLocaleDateString(
    'pt-BR',
    {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }
  );
}