<script lang="ts">
/**
 * Individual tab within a `SbTabs` container, inspired by Quasar's `QTab`.
 *
 * Renders a button with icon and/or label. Active state is determined by
 * matching `name` against the parent `SbTabs` model value. For route-aware
 * tabs that navigate on click, use `SbRouteTab` instead.
 *
 * @example
 * ```vue
 * <SbTabs v-model="tab">
 *   <SbTab name="overview" icon="i-lucide-eye" label="Overview" />
 *   <SbTab name="details" icon="i-lucide-list" label="Details" />
 * </SbTabs>
 * ```
 */
export interface SbTabProps {
  /** Unique tab identifier. Matched against the parent `SbTabs` model value. */
  name: string
  /** Icon class name (e.g., `"i-lucide-home"`). Rendered via `UIcon`. */
  icon?: string
  /** Tab label text displayed below the icon. */
  label?: string
  /** Disable interaction and dim the tab. @defaultValue `false` */
  disable?: boolean
}
</script>

<script setup lang="ts">
import UIcon from "@nuxt/ui/components/Icon.vue"
import { computed, inject, type Ref } from "vue"

const props = withDefaults(defineProps<SbTabProps>(), {
  disable: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const tabs = inject<{
  activeTab: Ref<string | undefined>
  activeColor: Ref<string | undefined>
  dense: Ref<boolean>
  indicator: Ref<boolean>
  indicatorColor: Ref<string | undefined>
  select: (name: string) => void
} | null>("sb-tabs", null)

const isActive = computed(() => tabs?.activeTab.value === props.name)

const classes = computed(() => [
  "sb-tab",
  "flex flex-col items-center justify-center gap-1",
  "flex-1 min-w-0",
  tabs?.dense.value ? "py-1" : "py-2",
  "text-xs font-medium transition-colors",
  props.disable && "opacity-50 pointer-events-none",
  !props.disable && "cursor-pointer",
  isActive.value ? tabs?.activeColor.value || "text-primary" : "text-muted hover:text-highlighted",
])

function onClick(e: MouseEvent) {
  if (props.disable) return
  tabs?.select(props.name)
  emit("click", e)
}
</script>

<template>
  <button
    :class="classes"
    role="tab"
    :aria-selected="isActive"
    :aria-disabled="disable || undefined"
    :tabindex="disable ? -1 : 0"
    @click="onClick"
  >
    <UIcon v-if="icon" :name="icon" class="size-5" />
    <span v-if="label">{{ label }}</span>
    <slot />

    <span
      v-if="tabs?.indicator.value && isActive"
      class="absolute right-1/4 bottom-0 left-1/4 h-0.5 rounded-full"
      :class="tabs?.indicatorColor || 'bg-primary'"
    />
  </button>
</template>
