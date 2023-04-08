export function useClipboard() {
  const copyToClipboard = (data: string) => {
    navigator.clipboard.writeText(data)
  }

  return { copyToClipboard }
}
