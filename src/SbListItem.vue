<script lang="ts">
/**
 * Individual row within a `SbList`, inspired by Quasar's `QItem`.
 *
 * Renders as a flex row that contains `SbListSection` children in the
 * standard three-column layout: avatar | main (expands) | side.
 *
 * Supports clickable states with hover/focus styling, navigation via
 * the `to` prop (renders as `<a>`), and active highlighting. Inherits
 * `dense` from the parent `SbList` or can be set per-item.
 *
 * @example
 * ```vue
 * <SbListItem clickable to="/items/1">
 *   <SbListSection avatar>...</SbListSection>
 *   <SbListSection>...</SbListSection>
 *   <SbListSection side>...</SbListSection>
 * </SbListItem>
 * ```
 */
export interface SbListItemProps {
  /** HTML tag to render as. Overridden to `"a"` when `to` is set. @defaultValue `"div"` */
  as?: string
  /** Enable clickable hover/focus states. Automatically true when `to` is set. @defaultValue `false` */
  clickable?: boolean
  /** Navigation URL. When set, renders as an anchor tag. */
  to?: string
  /** Highlight this item as active. @defaultValue `false` */
  active?: boolean
  /** Reduce vertical padding for this item. @defaultValue `false` */
  dense?: boolean
}
</script>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(defineProps<SbListItemProps>(), {
  as: "div",
  clickable: false,
  active: false,
  dense: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const isDense = computed(() => props.dense)

const isClickable = computed(() => props.clickable || !!props.to)

const tag = computed(() => {
  if (props.to) return "a"
  return props.as
})

const linkAttrs = computed(() => {
  if (!props.to) return {}
  return { href: props.to }
})

const classes = computed(() => [
  "sb-list-item",
  "flex items-center gap-2",
  isDense.value ? "py-1" : "py-2 group-data-[dense]/list:py-1",
  "group-data-[bordered]/list:px-4",
  isClickable.value && "cursor-pointer transition-colors hover:bg-elevated/50",
  isClickable.value && "focus-visible:outline-none focus-visible:bg-elevated/50",
  props.active && "bg-elevated/50",
])

function onClick(e: MouseEvent) {
  emit("click", e)
}
</script>

<template>
  <component
    :is="tag"
    role="listitem"
    :class="classes"
    v-bind="linkAttrs"
    :tabindex="isClickable ? 0 : undefined"
    @click="onClick"
  >
    <slot />
  </component>
</template>
