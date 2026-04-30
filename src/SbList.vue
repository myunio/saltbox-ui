<script lang="ts">
/**
 * Composable list container inspired by Quasar's `QList`.
 *
 * Provides a semantic list wrapper with optional borders, item separators,
 * and density control. Compose with `SbListItem`, `SbListSection`, and
 * `SbListLabel` to build rich list UIs declaratively.
 *
 * List-level props like `dense` and `bordered` are communicated to child
 * `SbListItem` components via Tailwind group variants and data attributes,
 * so items automatically adjust their padding based on context.
 *
 * @example
 * ```vue
 * <SbList bordered separator>
 *   <SbListItem clickable to="/items/1">
 *     <SbListSection avatar>
 *       <UAvatar src="..." />
 *     </SbListSection>
 *     <SbListSection>
 *       <SbListLabel>Item Name</SbListLabel>
 *       <SbListLabel caption>Description</SbListLabel>
 *     </SbListSection>
 *   </SbListItem>
 * </SbList>
 * ```
 */
export interface SbListProps {
  /** HTML tag to render as. @defaultValue `"div"` */
  as?: string
  /** Add a border around the entire list. @defaultValue `false` */
  bordered?: boolean
  /** Add separator lines between items. @defaultValue `false` */
  separator?: boolean
  /** Reduce vertical padding on all child items. @defaultValue `false` */
  dense?: boolean
  /** Add vertical padding to the list container. @defaultValue `false` */
  padding?: boolean
}
</script>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(defineProps<SbListProps>(), {
  as: "div",
  bordered: false,
  separator: false,
  dense: false,
  padding: false,
})

const tag = computed(() => props.as)

const classes = computed(() => [
  "sb-list",
  "group/list",
  props.bordered && "border border-default rounded-lg overflow-hidden",
  props.separator && "divide-y divide-default",
  props.padding && "py-2",
])
</script>

<template>
  <component
    :is="tag"
    :role="tag === 'ul' || tag === 'ol' ? undefined : 'list'"
    :class="classes"
    :data-bordered="bordered || undefined"
    :data-dense="dense || undefined"
  >
    <slot />
  </component>
</template>
