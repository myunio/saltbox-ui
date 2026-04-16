<script lang="ts">
/**
 * Speed-dial action button within a `SbFab`, inspired by Quasar's `QFabAction`.
 *
 * Renders as a smaller button that appears when the parent `SbFab` speed-dial
 * is open. Clicking an action navigates to `to` (if set), emits `click`,
 * and closes the parent speed-dial.
 *
 * @example
 * ```vue
 * <SbFab icon="i-lucide-plus" direction="up">
 *   <SbFabAction icon="i-lucide-camera" label="Photo" to="/capture" />
 *   <SbFabAction icon="i-lucide-pencil" label="Manual" to="/manual" />
 * </SbFab>
 * ```
 */
export interface SbFabActionProps {
  /** Icon class name rendered via `UIcon`. */
  icon?: string
  /** Label text. When present, renders as a pill shape. */
  label?: string
  /** Position of the label relative to the icon. @defaultValue `"left"` */
  labelPosition?: "top" | "right" | "bottom" | "left"
  /** Navigation URL. Navigates on click via Inertia router. */
  to?: string
  /** Background color as a Tailwind class. @defaultValue `"bg-primary-50"` */
  color?: string
  /** Use rounded-rectangle shape instead of circle. @defaultValue `false` */
  square?: boolean
  /** Disable this action. @defaultValue `false` */
  disable?: boolean
}
</script>

<script setup lang="ts">
import { computed, inject, type Ref } from "vue"
import UIcon from "@nuxt/ui/components/Icon.vue"

import { useSbNavigator } from "./navigator"

const props = withDefaults(defineProps<SbFabActionProps>(), {
  labelPosition: "left",
  color: "bg-primary-50",
  square: false,
  disable: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const { navigate } = useSbNavigator()

const fab = inject<{
  isOpen: Ref<boolean>
  onChildClick: (e: MouseEvent) => void
} | null>("sb-fab", null)

const classes = computed(() => [
  "sb-fab-action",
  "inline-flex items-center gap-2",
  "shadow-md",
  "transition-all duration-150",
  "hover:shadow-lg hover:scale-105",
  "active:scale-95",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
  props.label
    ? `${props.square ? "rounded-lg" : "rounded-full"} h-10 px-4`
    : `${props.square ? "rounded-lg" : "rounded-full"} size-10`,
  props.color,
  props.disable && "opacity-50 pointer-events-none",
])

const labelClasses = computed(() => [
  "text-sm font-medium",
  props.color === "bg-primary-50" ? "text-primary" : "text-white",
])

function onClick(e: MouseEvent) {
  if (props.disable) return
  emit("click", e)
  fab?.onChildClick(e)
  if (props.to) {
    e.preventDefault()
    navigate(props.to)
  }
}
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    :href="to"
    :class="classes"
    :disabled="disable || undefined"
    role="menuitem"
    @click="onClick"
  >
    <UIcon
      v-if="icon"
      :name="icon"
      class="size-5"
      :class="color === 'bg-primary-50' ? 'text-primary' : 'text-white'"
    />
    <span v-if="label" :class="labelClasses">{{ label }}</span>
  </component>
</template>
