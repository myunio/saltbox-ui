<script lang="ts">
/**
 * Fixed-width mini progress bar with fraction label.
 *
 * Displays a horizontal bar showing progress toward a total, with an
 * optional text label like "8 / 12". Three visual states are derived
 * automatically: **empty** (current = 0), **partial** (0 < current < total),
 * and **complete** (current >= total).
 *
 * The `size` prop controls width and height for different contexts:
 * `sm` for compact list rows, `md` for scope cards.
 *
 * @example
 * ```vue
 * <SbProgressBar :current="8" :total="12" size="sm" />
 * <SbProgressBar :current="12" :total="12" size="md" />
 * <SbProgressBar :current="0" :total="5" size="sm" />
 * ```
 */
export interface SbProgressBarProps {
  /** Number of completed items. */
  current: number
  /** Total number of items. */
  total: number
  /** Bar size. `sm` for list rows, `md` for cards. @defaultValue `"sm"` */
  size?: "sm" | "md"
  /** Show the fraction label (e.g. "8 / 12"). @defaultValue `true` */
  showLabel?: boolean
}
</script>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(defineProps<SbProgressBarProps>(), {
  size: "sm",
  showLabel: true,
})

const percent = computed(() => {
  if (props.total <= 0) return 0
  return Math.min(100, Math.round((props.current / props.total) * 100))
})

const state = computed(() => {
  if (props.current <= 0) return "empty"
  if (props.current >= props.total) return "complete"
  return "partial"
})

const barClasses = computed(() => [
  "rounded-full overflow-hidden bg-accented",
  props.size === "sm" ? "h-1.5 w-16" : "h-2 w-24",
])

const fillClasses = computed(() => [
  "h-full rounded-full transition-all",
  state.value === "complete" ? "bg-[var(--ui-success)]" : "bg-[var(--ui-primary)]",
])

const labelClasses = computed(() => [
  "tabular-nums whitespace-nowrap font-medium",
  props.size === "sm" ? "text-[10px] text-muted" : "text-xs text-muted",
])
</script>

<template>
  <div class="flex flex-col gap-1">
    <span v-if="showLabel" :class="labelClasses"> {{ current }}/{{ total }} </span>
    <div :class="barClasses">
      <div v-if="percent > 0" :class="fillClasses" :style="{ width: `${percent}%` }" />
    </div>
  </div>
</template>
