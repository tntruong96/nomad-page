import { format, type FormatDateOptions } from 'date-fns';

function formatDate(
  date: string | number | Date,
  type: string,
  options?: FormatDateOptions,
): string {
  return format(new Date(date), type, { ...options });
}

export { formatDate };
