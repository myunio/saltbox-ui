<script lang="ts">
/**
 * Toolbar between filters and results.
 *
 * Slot-based layout: left side typically holds a result count and clear
 * button, right side holds sort controls or other actions. The bar
 * provides the flexbox skeleton — callers fill the slots with whatever
 * controls their page needs.
 *
 * @example
 * ```vue
 * <SbResultsBar>
 *   <template #left>
 *     <span class="text-sm text-muted">142 items</span>
 *   </template>
 *   <template #right>
 *     <UButton label="Sort" variant="ghost" size="sm" />
 *   </template>
 * </SbResultsBar>
 * ```
 */
export interface SbResultsBarProps {
  // Slot-only component — no props needed.
}
</script>

<script setup lang="ts">
defineProps<SbResultsBarProps>()
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <slot name="left" />
    </div>
    <div class="flex items-center gap-2">
      <slot name="right" />
    </div>
  </div>
</template>
