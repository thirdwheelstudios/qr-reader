import Dexie, { Table } from 'dexie'
import { ScanResult } from '../../models'

export class QrReaderDexie extends Dexie {
  history!: Table<ScanResult>

  constructor() {
    super('qrReaderDatabase')

    this.version(1).stores({
      history: '++id, scannedUtcDateTime, data',
    })
  }
}

export const db = new QrReaderDexie()