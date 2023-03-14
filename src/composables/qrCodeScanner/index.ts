import { ref } from 'vue'
import QrScanner from 'qr-scanner'
import { ScanResult } from '../../models'
import { DateTime } from 'luxon'
import { db } from '../../persistence'

export function useQrCodeScanner() {
  const qrScanner = ref<QrScanner>()

  const mapAndSaveResult = async (scanResult: QrScanner.ScanResult) => {
    const result = {
      data: scanResult.data,
      scannedUtcDateTime: DateTime.utc().toJSDate(),
    }

    await db.history.add(result)

    return result
  }

  const readQrCodeFromFile = async (file: File) => {
    const result = await QrScanner.scanImage(file, {
      returnDetailedScanResult: true,
    })

    return await mapAndSaveResult(result)
  }

  const startScanning = (
    videoElem: HTMLVideoElement,
    result: (scanResult: ScanResult) => void
  ) => {
    const scanner = new QrScanner(
      videoElem,
      async (scanResult) => {
        result(await mapAndSaveResult(scanResult))
      },
      {
        returnDetailedScanResult: true,
      }
    )

    scanner.start()

    qrScanner.value = scanner
  }

  const stopScanning = () => {
    qrScanner.value?.stop()
  }

  return {
    readQrCodeFromFile,
    qrScanner,
    startScanning,
    stopScanning,
  }
}
