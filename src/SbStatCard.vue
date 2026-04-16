<script lang="ts">
/**
 * Single metric card displaying a value, label, and optional icon.
 *
 * Standalone — the parent owns the grid layout. Compose multiple
 * `SbStatCard` instances in a CSS grid for dashboard stat rows.
 *
 * Renders as a link when `to` is provided.
 *
 * @example
 * ```vue
 * <div class="grid grid-cols-3 gap-1">
 *   <SbStatCard :value="142" label="Items" icon="i-lucide-package" />
 *   <SbStatCard :value="23" label="Containers" icon="i-lucide-archive" />
 *   <SbStatCard :value="98" label="Cataloged" icon="i-lucide-check" />
 * </div>
 * ```
 */
export interface SbStatCardProps {
  /** The metric value to display. */
  value: number | string
  /** Label beneath the value. */
  label: string
  /** Optional icon identifier (e.g. "i-lucide-package"). */
  icon?: string
  /** Optional navigation URL. When set, the card renders as a link. */
  to?: string
  /** Add a border around the card. @defaultValue `false` */
  bordered?: boolean
}
</script>

<script setup lang="ts">
import UIcon from "@nuxt/ui/components/Icon.vue"
import { computed } from "vue"

const props = withDefaults(defineProps<SbStatCardProps>(), {
  bordered: false,
})

const tag = computed(() => (props.to ? "a" : "div"))

const linkAttrs = computed(() => {
  if (!props.to) return {}
  return { href: props.to }
})

const formattedValue = computed(() => {
  if (typeof props.value === "number") return props.value.toLocaleString()
  return props.value
})
</script>

<template>
  <component
    :is="tag"
    v-bind="linkAttrs"
    class="flex flex-col items-center gap-1 rounded-lg p-4"
    :class="[
      to && 'hover:bg-elevated/50 cursor-pointer transition-colors',
      bordered && 'border-default border',
    ]"
  >
    <div class="flex items-center gap-1">
      <UIcon v-if="icon" :name="icon" class="text-primary size-4 lg:size-5" />
      <span class="text-highlighted text-xl font-semibold tabular-nums lg:text-2xl">
        {{ formattedValue }}
      </span>
    </div>
    <span class="text-muted text-xs uppercase">{{ label }}</span>
    <slot />
  </component>
</template>
