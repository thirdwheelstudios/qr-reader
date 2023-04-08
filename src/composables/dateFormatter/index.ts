import { DateTime } from 'luxon'

export function useDateFormatter() {
  const toDisplayDate = (dateToDisplay: Date) => {
    const date = DateTime.fromJSDate(dateToDisplay)

    return date.toRelative()
  }

  return { toDisplayDate }
}
