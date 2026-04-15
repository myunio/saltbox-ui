<script lang="ts">
/**
 * Block-level section divider with label and optional trailing action.
 *
 * Use between page regions to label groups of content. Distinct from
 * `SbListLabel` with `header` (which lives *inside* a list as a group
 * divider) — this component stands alone between siblings.
 *
 * The trailing slot accommodates action links, buttons, or any widget
 * without prescribing what goes there.
 *
 * @example
 * ```vue
 * <SbSectionHeader label="Recent Items">
 *   <template #trailing>
 *     <UButton label="See all" variant="link" size="sm" />
 *   </template>
 * </SbSectionHeader>
 * ```
 */
export interface SbSectionHeaderProps {
  /** Section label text. */
  label: string
}
</script>

<script setup lang="ts">
defineProps<SbSectionHeaderProps>()
</script>

<template>
  <div class="flex items-center justify-between">
    <h2 class="text-highlighted text-sm font-semibold">{{ label }}</h2>
    <slot name="trailing" />
  </div>
</template>
