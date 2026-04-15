<script lang="ts">
/**
 * Key-value metadata row for detail views.
 *
 * Displays a label on the left and a value on the right, with fallback
 * text when the value is empty. Composes `SbListItem` + `SbListSection`
 * internally for consistent list alignment.
 *
 * Use inside an `SbList` to build detail grids with consistent spacing.
 *
 * @example
 * ```vue
 * <SbList bordered separator>
 *   <SbDetailRow label="Brand" value="DeWalt" />
 *   <SbDetailRow label="Model" value="DCF887" mono />
 *   <SbDetailRow label="Serial" />
 * </SbList>
 * ```
 */
export interface SbDetailRowProps {
  /** The field label. */
  label: string
  /** The field value. When absent, `fallback` is shown. */
  value?: string | null
  /** Text shown when `value` is empty. @defaultValue `"Not set"` */
  fallback?: string
  /** Render the value in monospace font at a smaller size. @defaultValue `false` */
  mono?: boolean
  /** Optional secondary label beneath the primary label. */
  subLabel?: string
}
</script>

<script setup lang="ts">
import SbListItem from "./SbListItem.vue"
import SbListLabel from "./SbListLabel.vue"
import SbListSection from "./SbListSection.vue"

withDefaults(defineProps<SbDetailRowProps>(), {
  fallback: "Not set",
  mono: false,
})
</script>

<template>
  <SbListItem>
    <SbListSection>
      <SbListLabel caption>{{ label }}</SbListLabel>
      <SbListLabel v-if="subLabel" caption class="text-xs">{{ subLabel }}</SbListLabel>
    </SbListSection>
    <SbListSection side>
      <span
        :class="[value ? 'text-highlighted' : 'text-muted', mono ? 'font-mono text-xs' : 'text-sm']"
      >
        {{ value ?? fallback }}
      </span>
    </SbListSection>
  </SbListItem>
</template>
