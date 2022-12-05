import { parseISO, format } from 'date-fns'

type BlogDateProps = {
  dateString: string;
}

export function BlogDate({ dateString }: BlogDateProps) {
  if (!dateString) return <div />

  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLL	d, yyyy')}</time>
}
