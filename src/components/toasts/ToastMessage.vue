<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { ToastMessage } from '../../models'
import PanelContainer from '../PanelContainer.vue'

export interface Props {
  toast: ToastMessage
  autoDismissAfterSeconds?: number
}

const props = withDefaults(defineProps<Props>(), {
  autoDismissAfterSeconds: 3,
})

const emits = defineEmits(['dismiss'])

const interval = ref<number>()
const counter = ref(0)

const shouldDismiss = computed(() => {
  return (
    props.autoDismissAfterSeconds &&
    counter.value > props.autoDismissAfterSeconds
  )
})

onMounted(() => {
  interval.value = window.setInterval(
    () => {
      counter.value += 1
    },
    1000,
    []
  )
})

onUnmounted(() => {
  if (interval.value) {
    window.clearInterval(interval.value)
  }
})

watch(
  () => shouldDismiss.value,
  (value) => {
    if (value) emits('dismiss')
  }
)
</script>

<template>
  <PanelContainer class="toast-message">
    <div class="header">
      <font-awesome-icon :icon="['fas', 'info-circle']" class="icon" />
      <strong v-if="toast.title">{{ toast.title }}</strong>
      <small>{{ counter }} second{{ counter === 1 ? '' : 's' }} ago</small>
    </div>
    <div>{{ toast.message }}</div>
  </PanelContainer>
</template>

<style scoped lang="scss">
.toast-message {
  margin: 0.5rem;
  border-radius: 0.25rem;
  min-width: 180px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;
    border-bottom: 1px solid #ccc;

    .icon {
      color: #1647e9;
    }

    small {
      align-self: flex-end;
    }
  }

  div {
    padding: 0.25rem 0.75rem;
  }
}
</style>
