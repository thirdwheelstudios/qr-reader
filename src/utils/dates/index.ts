import { DateTime } from 'luxon'

const toDisplayDate = (dateToDisplay: Date) => {
  const date = DateTime.fromJSDate(dateToDisplay)

  return date.toRelative()
}

export { toDisplayDate }
