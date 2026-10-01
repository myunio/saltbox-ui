<script setup lang="ts">
// Values are already formatted by the host: money, missing values and coverage
// each have domain rules that a presentation primitive must not guess.
defineProps<{
  label: string;
  value: string | number;
  description?: string;
  ui?: { label?: string; value?: string; description?: string };
}>();
</script>

<template>
  <dl class="flex min-w-0 flex-col gap-2">
    <dt :class="ui?.label ?? 'text-muted text-sm'">{{ label }}</dt>
    <dd :class="ui?.value ?? 'text-highlighted text-3xl font-semibold tabular-nums'" class="break-words">{{ value }}</dd>
    <dd v-if="description || $slots.default" :class="ui?.description ?? 'text-muted text-sm'">
      <slot>{{ description }}</slot>
    </dd>
  </dl>
</template>
