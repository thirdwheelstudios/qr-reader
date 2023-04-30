import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { ToastMessage } from '../../models'

export const useToastStore = defineStore('toast', {
  state: () => {
    let _toasts = [] as ToastMessage[]
    return { _toasts }
  },
  getters: {
    toasts(state) {
      return state._toasts
    },
  },
  actions: {
    push(message: string, title?: string) {
      this._toasts.push({ id: uuidv4(), title, message })
    },
    pop(toastId: string) {
      this._toasts = this._toasts.filter((x) => x.id !== toastId)
    },
  },
})
