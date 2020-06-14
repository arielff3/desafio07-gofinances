const formatValue = (value: number, type = ''): string => {
  return type === 'outcome'
    ? Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value)
    : Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value);
};

export default formatValue;
