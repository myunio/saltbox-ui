<script lang="ts">
/**
 * Tab bar container inspired by Quasar's `QTabs`.
 *
 * Provides tab context (active tab, colors, density) to child `SbTab` and
 * `SbRouteTab` components via Vue's provide/inject. Can be used anywhere —
 * bottom nav, toolbars, settings panels.
 *
 * @example
 * ```vue
 * <SbTabs v-model="activeTab" stretch>
 *   <SbRouteTab name="home" icon="i-lucide-house" label="Home" to="/" exact />
 *   <SbRouteTab name="items" icon="i-lucide-package" label="Items" to="/items" />
 * </SbTabs>
 * ```
 */
export interface SbTabsProps {
  /** Currently active tab name (two-way binding via `v-model`). */
  modelValue?: string
  /** Tailwind color class for active tab text (e.g., `"text-primary"`). */
  activeColor?: string
  /** Reduce vertical padding on all child tabs. @defaultValue `false` */
  dense?: boolean
  /** Show an indicator line under the active tab. @defaultValue `false` */
  indicator?: boolean
  /** Tailwind color class for the indicator line (e.g., `"bg-primary"`). */
  indicatorColor?: string
  /** Stretch tabs to fill the container width equally. @defaultValue `false` */
  stretch?: boolean
}
</script>

<script setup lang="ts">
import { computed, provide, toRef } from "vue"

const props = withDefaults(defineProps<SbTabsProps>(), {
  dense: false,
  indicator: false,
  stretch: false,
})

const emit = defineEmits<{
  "update:modelValue": [value: string]
}>()

const modelValue = toRef(props, "modelValue")

provide("sb-tabs", {
  activeTab: modelValue,
  activeColor: toRef(props, "activeColor"),
  dense: toRef(props, "dense"),
  indicator: toRef(props, "indicator"),
  indicatorColor: toRef(props, "indicatorColor"),
  select(name: string) {
    emit("update:modelValue", name)
  },
})

const classes = computed(() => ["sb-tabs", "flex items-center", props.stretch ? "w-full" : "gap-1"])
</script>

<template>
  <nav :class="classes" role="tablist">
    <slot />
  </nav>
</template>
