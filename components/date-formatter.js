import { parseISO, format } from 'date-fns'

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString.replace("'","").replace("'",""));
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}
