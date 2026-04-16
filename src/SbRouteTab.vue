<script lang="ts">
/**
 * Route-aware tab within a `SbTabs` container, inspired by Quasar's `QRouteTab`.
 *
 * Like `SbTab` but navigates to a URL on click and determines its active state
 * from the current Inertia page URL. Renders as an `<a>` tag for accessibility
 * and progressive enhancement.
 *
 * @example
 * ```vue
 * <SbTabs v-model="tab" stretch>
 *   <SbRouteTab name="home" icon="i-lucide-house" label="Home" to="/" exact />
 *   <SbRouteTab name="items" icon="i-lucide-package" label="Items" to="/items" />
 * </SbTabs>
 * ```
 */
export interface SbRouteTabProps {
  /** Unique tab identifier. */
  name: string
  /** Icon class name (e.g., `"i-lucide-home"`). Rendered via `UIcon`. */
  icon?: string
  /** Tab label text displayed below the icon. */
  label?: string
  /** Route path to navigate to on click. */
  to: string
  /** Match route exactly instead of prefix matching. @defaultValue `false` */
  exact?: boolean
  /** Disable interaction and dim the tab. @defaultValue `false` */
  disable?: boolean
}
</script>

<script setup lang="ts">
import { computed, inject, type Ref } from "vue"
import UIcon from "@nuxt/ui/components/Icon.vue"

import { useSbNavigator } from "./navigator"

const props = withDefaults(defineProps<SbRouteTabProps>(), {
  exact: false,
  disable: false,
})

const tabs = inject<{
  activeTab: Ref<string | undefined>
  activeColor: Ref<string | undefined>
  dense: Ref<boolean>
  indicator: Ref<boolean>
  indicatorColor: Ref<string | undefined>
  select: (name: string) => void
} | null>("sb-tabs", null)

const { navigate, currentUrl } = useSbNavigator()

const isActive = computed(() => {
  const url = currentUrl.value
  if (props.exact) {
    return url === props.to || url === props.to + "/"
  }
  return url.startsWith(props.to)
})

const classes = computed(() => [
  "sb-tab sb-route-tab",
  "flex flex-col items-center justify-center gap-1",
  "flex-1 min-w-0",
  tabs?.dense.value ? "py-1" : "py-2",
  "text-xs font-medium transition-colors",
  props.disable && "opacity-50 pointer-events-none",
  !props.disable && "cursor-pointer",
  isActive.value ? tabs?.activeColor.value || "text-primary" : "text-muted hover:text-highlighted",
])

function onClick(e: MouseEvent) {
  e.preventDefault()
  if (props.disable) return
  tabs?.select(props.name)
  navigate(props.to)
}
</script>

<template>
  <a
    :href="to"
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
  </a>
</template>
