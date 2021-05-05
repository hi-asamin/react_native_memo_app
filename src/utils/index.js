import { format } from 'date-fns';

// eslint-disable-next-line import/prefer-default-export
export const dateToString = (date) => {
  if (!date) { return ''; }
  return format(date, 'yyyy年M月d日 HH時mm分');
};
