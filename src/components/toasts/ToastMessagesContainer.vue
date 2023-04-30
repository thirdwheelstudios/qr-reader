<script setup lang="ts">
import ToastMessage from './ToastMessage.vue'
import { useToastStore } from '../../store'
import { computed } from 'vue'

const toastStore = useToastStore()

const toasts = computed(() => toastStore.toasts)
</script>

<template>
  <TransitionGroup name="list" tag="ul">
    <li v-for="toast in toasts" :key="toast.id">
      <ToastMessage :toast="toast" @dismiss="toastStore.pop(toast.id)" />
    </li>
  </TransitionGroup>
</template>

<style scoped lang="scss">
ul {
  position: fixed;
  right: 0;
  top: 0;
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column-reverse;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

@media screen and (min-width: 640px) {
  ul {
    bottom: 0;
    top: initial;
    flex-direction: column;
  }
}
</style>
