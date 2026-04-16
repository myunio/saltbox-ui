<script lang="ts">
/**
 * Infinite scroll trigger with button fallback.
 *
 * Uses `IntersectionObserver` to automatically emit `load` when the
 * element scrolls into view. Also renders a visible "Load more" button
 * as a fallback for cases where the observer doesn't fire (e.g. content
 * is already in the viewport).
 *
 * Shows a loading state while the parent is fetching more data.
 *
 * @example
 * ```vue
 * <SbLoadMore :loading="isFetching" @load="fetchNextPage" />
 * ```
 */
export interface SbLoadMoreProps {
  /** Whether more data is currently being loaded. @defaultValue `false` */
  loading?: boolean
  /** Button label. @defaultValue `"Load more"` */
  label?: string
  /** Disable the observer and button (e.g. when all data is loaded). @defaultValue `false` */
  disabled?: boolean
}
</script>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue"

const props = withDefaults(defineProps<SbLoadMoreProps>(), {
  loading: false,
  label: "Load more",
  disabled: false,
})

const emit = defineEmits<{
  load: []
}>()

const sentinel = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

function onIntersect(entries: IntersectionObserverEntry[]) {
  if (entries[0]?.isIntersecting && !props.loading && !props.disabled) {
    emit("load")
  }
}

onMounted(() => {
  if (!sentinel.value) return
  observer = new IntersectionObserver(onIntersect, { rootMargin: "200px" })
  observer.observe(sentinel.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

watch(
  () => props.disabled,
  (disabled) => {
    if (disabled) observer?.disconnect()
  },
)

function onClick() {
  if (!props.loading && !props.disabled) {
    emit("load")
  }
}
</script>

<template>
  <div ref="sentinel">
    <UButton
      v-if="!disabled"
      :label="loading ? 'Loading…' : label"
      :loading="loading"
      :disabled="loading"
      variant="ghost"
      color="neutral"
      size="sm"
      @click="onClick"
    />
  </div>
</template>
