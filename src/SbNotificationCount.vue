<script setup lang="ts">
/**
 * The unread count beside the title of the panel `SbNotificationBell` opens.
 * Renders nothing at zero.
 *
 * @example
 * ```vue
 * <h2>Notifications</h2>
 * <SbNotificationCount :count="unreadCount" />
 * ```
 */
import UBadge from "@nuxt/ui/components/Badge.vue";

import { notificationCountLabel } from "./notificationCount";

defineProps<{
  count: number;
  /** Badge text, e.g. a translated "3 unread". @defaultValue `"{count} unread"` */
  label?: string;
}>();
</script>

<template>
  <UBadge
    v-if="count > 0"
    :label="label ?? notificationCountLabel(count)"
    color="primary"
    variant="soft"
    size="sm"
    class="tabular-nums"
  />
</template>
