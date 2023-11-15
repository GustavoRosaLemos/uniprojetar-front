export const currencyBRL = (value: number | string) =>
  value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

export const getNextTenYearsString = () => {
  const currentYear = new Date().getFullYear();
  const futureYears: string[] = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10; i++) {
    const year = currentYear + i;
    futureYears.push(year.toString());
  }

  return futureYears;
};
