import QrScanner from 'qr-scanner'

export function useQrCodeScanner() {
  const readQrCodeFromFile = async (file: File) => {
    const result = await QrScanner.scanImage(file)

    return result
  }

  return {
    readQrCodeFromFile,
  }
}
