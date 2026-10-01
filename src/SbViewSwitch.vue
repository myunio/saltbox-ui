<script lang="ts">
export interface SbViewChoice {
  label: string;
  value: string;
  count?: string | number;
  disabled?: boolean;
}
</script>

<script setup lang="ts">
import UTabs from "@nuxt/ui/components/Tabs.vue";
const value = defineModel<string>({ required: true });
defineProps<{ items: SbViewChoice[]; label: string }>();
</script>

<template>
  <div role="group" :aria-label="label" class="min-w-0">
    <UTabs v-model="value" :items="items" :content="false" size="md" color="neutral"
      :ui="{ list: 'flex-wrap', trigger: 'min-h-(--app-target) whitespace-normal data-[state=active]:text-highlighted', label: 'whitespace-normal', indicator: 'bg-default shadow-sm' }">
      <template #default="{ item }">
        <span>{{ item.label }}</span>
        <span v-if="item.count !== undefined" class="text-muted ms-2 tabular-nums">{{ item.count }}</span>
      </template>
    </UTabs>
  </div>
</template>
