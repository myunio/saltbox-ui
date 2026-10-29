<script setup lang="ts">
/**
 * The notification bell for an app's top bar: a ghost icon button with a small
 * red dot while anything is unread. The count itself belongs in the panel the
 * bell opens (`SbNotificationCount`), so the bar stays quiet.
 *
 * The host owns the data and the panel: wrap the bell in a `UPopover` or open a
 * `USlideover` from its `click`. Text comes in as props so hosts can translate it.
 *
 * @example
 * ```vue
 * <UPopover v-model:open="open">
 *   <SbNotificationBell :count="unreadCount" />
 *   <template #content>…</template>
 * </UPopover>
 * ```
 */
import { computed } from "vue";

import { notificationCountLabel } from "./notificationCount";

const props = withDefaults(
  defineProps<{
    /** Unread notifications; the dot shows above zero. */
    count: number;
    /** Accessible name of the button. @defaultValue `"Notifications"` */
    label?: string;
    /** Spoken after the label while unread, e.g. "3 unread". @defaultValue `"{count} unread"` */
    countLabel?: string;
    /** Tooltip text; none when left out. */
    tooltip?: string;
    /** @defaultValue `"i-lucide-bell"` */
    icon?: string;
  }>(),
  { label: "Notifications", icon: "i-lucide-bell" },
);

const unread = computed(() => props.count > 0);
// The dot carries no number, so the button's name says how many are unread.
const ariaLabel = computed(() =>
  unread.value
    ? `${props.label}, ${props.countLabel ?? notificationCountLabel(props.count)}`
    : props.label,
);
</script>

<template>
  <UTooltip :text="tooltip" :disabled="!tooltip">
    <UChip :show="unread" color="error" inset>
      <UButton :icon="icon" color="neutral" variant="ghost" :aria-label="ariaLabel" />
    </UChip>
  </UTooltip>
</template>
