<script setup lang="ts">
// Figures side by side, one per row on phones. By default two columns from
// `sm`, then four from `lg`. `columns="3"` takes three columns from `sm`, so
// three figures do not leave one alone on a tablet's second row.
withDefaults(defineProps<{ columns?: 3 | "3" }>(), { columns: undefined });
</script>

<template>
  <div
    class="grid min-w-0 grid-cols-1 gap-6"
    :class="Number(columns) === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'"
  >
    <slot />
  </div>
</template>
