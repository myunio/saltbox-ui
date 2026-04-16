<script lang="ts">
/**
 * Floating Action Button with optional speed-dial, inspired by Quasar's `QFab`.
 *
 * When used without child `SbFabAction` components, acts as a simple floating
 * button that navigates via `to` or emits `click`. When `SbFabAction` children
 * are provided, clicking the FAB toggles a speed-dial menu that fans out in
 * the specified `direction`.
 *
 * Supports round or square shapes, three sizes, pill shape with label,
 * and icon swapping between open/closed states.
 *
 * @example Simple FAB
 * ```vue
 * <SbFab icon="i-lucide-plus" to="/items/new" class="fixed bottom-4 right-4" />
 * ```
 *
 * @example Speed-dial FAB
 * ```vue
 * <SbFab icon="i-lucide-camera" active-icon="i-lucide-x" direction="up" square>
 *   <SbFabAction icon="i-lucide-camera" label="Photo" to="/capture" square />
 *   <SbFabAction icon="i-lucide-scan-qr-code" label="Scan QR" to="/scan" square />
 * </SbFab>
 * ```
 */
export interface SbFabProps {
  /** Icon displayed when the FAB is closed. */
  icon?: string
  /** Icon displayed when the speed-dial is open. @defaultValue `"i-lucide-x"` */
  activeIcon?: string
  /** Hide the icon entirely. @defaultValue `false` */
  hideIcon?: boolean
  /** Label text. When present, renders as a pill shape instead of a circle. */
  label?: string
  /** Position of the label relative to the icon. @defaultValue `"right"` */
  labelPosition?: "top" | "right" | "bottom" | "left"
  /** Hide the label while keeping the pill shape. @defaultValue `false` */
  hideLabel?: boolean
  /** Navigation URL for simple (non-speed-dial) FABs. Ignored when actions are present. */
  to?: string
  /** Background color as a Tailwind class. @defaultValue `"bg-primary"` */
  color?: string
  /** Button size. @defaultValue `"lg"` */
  size?: "sm" | "md" | "lg"
  /** Use rounded-rectangle shape instead of circle. @defaultValue `false` */
  square?: boolean
  /** Direction child actions fan out. @defaultValue `"up"` */
  direction?: "up" | "down" | "left" | "right"
  /** Keep the speed-dial open on route change. @defaultValue `false` */
  persistent?: boolean
  /** Disable the FAB. @defaultValue `false` */
  disable?: boolean
  /** Control the open/closed state of the speed-dial (two-way binding via `v-model`). */
  modelValue?: boolean
}
</script>

<script setup lang="ts">
import { computed, ref, provide, useSlots, watch } from "vue"
import UIcon from "@nuxt/ui/components/Icon.vue"

import { useSbNavigator } from "./navigator"

const props = withDefaults(defineProps<SbFabProps>(), {
  activeIcon: "i-lucide-x",
  hideIcon: false,
  labelPosition: "right",
  hideLabel: false,
  color: "bg-primary",
  size: "lg",
  square: false,
  direction: "up",
  persistent: false,
  disable: false,
})

const emit = defineEmits<{
  "update:modelValue": [value: boolean]
  click: [event: MouseEvent]
}>()

const { navigate } = useSbNavigator()
const slots = useSlots()
const hasActions = computed(() => !!slots.default)

const isOpen = ref(props.modelValue ?? false)

watch(
  () => props.modelValue,
  (val) => {
    if (val !== undefined) isOpen.value = val
  },
)

function setOpen(val: boolean) {
  isOpen.value = val
  emit("update:modelValue", val)
}

provide("sb-fab", {
  isOpen,
  onChildClick(_e: MouseEvent) {
    setOpen(false)
  },
})

const currentIcon = computed(() => {
  if (hasActions.value && isOpen.value) return props.activeIcon
  return props.icon
})

const isPill = computed(() => !!props.label && !props.hideLabel)

const sizeClasses = computed(() => {
  if (isPill.value) {
    return {
      sm: "h-10 px-4 text-sm",
      md: "h-12 px-4 text-sm",
      lg: "h-14 px-6 text-base",
    }[props.size]
  }
  return {
    sm: "size-10",
    md: "size-12",
    lg: "size-14",
  }[props.size]
})

const iconSize = computed(
  () =>
    ({
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
    })[props.size],
)

const rounding = computed(() => (props.square ? "rounded-lg" : "rounded-full"))

const triggerClasses = computed(() => [
  "sb-fab__trigger",
  "inline-flex items-center justify-center gap-2",
  "text-white shadow-lg",
  "transition-all duration-200",
  "hover:shadow-xl hover:scale-105",
  "active:scale-95",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
  props.color,
  rounding.value,
  sizeClasses.value,
  props.disable && "opacity-50 pointer-events-none",
])

const actionsClasses = computed(() => {
  const base = "sb-fab__actions flex gap-2 transition-all duration-200"
  const dir = {
    up: "flex-col items-end pb-2",
    down: "flex-col items-end pt-2",
    left: "flex-row-reverse items-center pr-2",
    right: "flex-row items-center pl-2",
  }[props.direction]

  return [
    base,
    dir,
    isOpen.value ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none",
  ]
})

const wrapperClasses = computed(() => {
  const dir = {
    up: "flex-col items-end",
    down: "flex-col items-end",
    left: "flex-row items-center",
    right: "flex-row items-center",
  }[props.direction]

  return ["sb-fab inline-flex", dir]
})

function onClick(e: MouseEvent) {
  if (props.disable) return
  emit("click", e)

  if (hasActions.value) {
    setOpen(!isOpen.value)
  } else if (props.to) {
    e.preventDefault()
    navigate(props.to)
  }
}
</script>

<template>
  <div :class="wrapperClasses">
    <div v-if="hasActions" :class="actionsClasses">
      <slot />
    </div>

    <component
      :is="!hasActions && to ? 'a' : 'button'"
      :href="!hasActions && to ? to : undefined"
      :class="triggerClasses"
      :disabled="disable || undefined"
      :aria-expanded="hasActions ? isOpen : undefined"
      :aria-haspopup="hasActions ? 'true' : undefined"
      @click="onClick"
    >
      <UIcon
        v-if="!hideIcon && currentIcon"
        :name="currentIcon"
        :class="[
          iconSize,
          hasActions && 'transition-transform duration-200',
          hasActions && isOpen && 'rotate-90',
        ]"
      />
      <span v-if="label && !hideLabel" class="font-medium">{{ label }}</span>
    </component>
  </div>
</template>
