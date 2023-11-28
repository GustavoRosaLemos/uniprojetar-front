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

export const getPreviusAndNextTenYearsString = () => {
  const currentYear = new Date().getFullYear();
  const futureYears: string[] = [];

  // eslint-disable-next-line no-plusplus
  for (let i = -10; i < 20; i++) {
    const year = currentYear + i;
    futureYears.push(year.toString());
  }

  return futureYears;
};

export const getQueryParams = (value?: Object) => {
  let query = '';
  if (!value) {
    return query;
  }

  Object.entries(value).forEach((v) => {
    if (v[1]) {
      if (query === '') {
        query += `?${v[0]}=${v[1]}`;
      } else {
        query += `&${v[0]}=${v[1]}`;
      }
    }
  });
  return query;
};

export const getInitials = (value?: string) => {
  if (!value) {
    return '';
  }

  const splitedValue = value.split(' ');
  const size = splitedValue.length;

  return (
    splitedValue[0].slice(0, 1) + splitedValue[size - 1].slice(0, 1)
  ).toLocaleUpperCase();
};
