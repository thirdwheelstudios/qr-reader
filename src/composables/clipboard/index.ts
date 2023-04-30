import { useToastStore } from '../../store'

export function useClipboard() {
  const toastStore = useToastStore()

  const copyToClipboard = (data: string) => {
    navigator.clipboard.writeText(data)
    toastStore.push('Copied to clipboard')
  }

  return { copyToClipboard }
}
