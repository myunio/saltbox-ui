<script setup lang="ts">
import { Fragment, useSlots, type VNode } from "vue";

// Figures side by side, one per row on phones. Three figures take three
// columns from `sm`, so none sits alone on a tablet's second row; any other
// count takes two from `sm`, then four from `lg`.
const slots = useSlots();
function figureCount() {
  const flatten = (nodes: VNode[]): VNode[] =>
    nodes.flatMap((node) => (node.type === Fragment ? flatten(node.children as VNode[]) : [node]));
  return flatten(slots.default?.() ?? []).filter((node) => typeof node.type !== "symbol").length;
}
</script>

<template>
  <div
    class="grid min-w-0 grid-cols-1 gap-6"
    :class="figureCount() === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'"
  >
    <slot />
  </div>
</template>
