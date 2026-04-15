<script lang="ts">
/**
 * Text label within a `SbListSection`, inspired by Quasar's `QItemLabel`.
 *
 * Handles text styling and truncation for list item content. Four modes:
 * - **Default**: Primary text — `text-sm font-medium text-highlighted`
 * - **Caption** (`caption`): Secondary text — `text-xs text-muted`
 * - **Overline** (`overline`): Small uppercase text above the primary label
 * - **Header** (`header`): Section header with padding for grouping items
 *
 * Adjacent labels get spacing from the parent `SbListSection`'s flex gap.
 *
 * @example
 * ```vue
 * <SbListSection>
 *   <SbListLabel :lines="1">Item Name</SbListLabel>
 *   <SbListLabel caption :lines="1">Container path</SbListLabel>
 * </SbListSection>
 * ```
 */
export interface SbListLabelProps {
  /** Render as small uppercase overline text. @defaultValue `false` */
  overline?: boolean
  /** Render as secondary caption/subtitle text. @defaultValue `false` */
  caption?: boolean
  /** Render as a section header with padding. @defaultValue `false` */
  header?: boolean
  /** Truncate text to N lines. `1` uses `truncate`, `2+` uses `-webkit-line-clamp`. */
  lines?: number
}
</script>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(defineProps<SbListLabelProps>(), {
  overline: false,
  caption: false,
  header: false,
})

const classes = computed(() => [
  "sb-list-label max-w-full",
  props.overline && "text-xs uppercase tracking-wide text-muted",
  props.caption && "text-xs text-muted",
  props.header &&
    "text-xs font-semibold text-muted uppercase tracking-wide py-2 group-data-[bordered]/list:px-4",
  !props.overline && !props.caption && !props.header && "text-sm font-medium text-highlighted",
  props.lines === 1 && "truncate",
  props.lines === 2 && "line-clamp-2",
  props.lines === 3 && "line-clamp-3",
  props.lines === 4 && "line-clamp-4",
  props.lines === 5 && "line-clamp-5",
])
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
