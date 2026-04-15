<script lang="ts">
/**
 * Column section within a `SbListItem`, inspired by Quasar's `QItemSection`.
 *
 * Controls the flex layout of content within a list item row. Three roles:
 * - **Main** (default): Fills available space, truncates content. Use for title/description.
 * - **Avatar/Thumbnail** (`avatar` or `thumbnail`): Fixed-width leading column for images/icons.
 * - **Side** (`side`): Trailing column for badges, timestamps, action icons.
 *
 * @example
 * ```vue
 * <SbListItem>
 *   <SbListSection avatar><!-- icon/avatar --></SbListSection>
 *   <SbListSection><!-- title + caption --></SbListSection>
 *   <SbListSection side><!-- trailing content --></SbListSection>
 * </SbListItem>
 * ```
 */
export interface SbListSectionProps {
  /** Fixed-width leading column for avatars/icons (40px). @defaultValue `false` */
  avatar?: boolean
  /** Fixed-width leading column for thumbnails (64px). @defaultValue `false` */
  thumbnail?: boolean
  /** Trailing column, right-aligned with muted text color. @defaultValue `false` */
  side?: boolean
  /** Align content to top instead of vertically centering. @defaultValue `false` */
  top?: boolean
  /** Prevent text wrapping in this section. @defaultValue `false` */
  noWrap?: boolean
}
</script>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(defineProps<SbListSectionProps>(), {
  avatar: false,
  thumbnail: false,
  side: false,
  top: false,
  noWrap: false,
})

const isSide = computed(() => props.avatar || props.side || props.thumbnail)

const classes = computed(() => [
  "sb-list-section",
  "flex flex-col gap-0.5",
  isSide.value ? "shrink-0" : "min-w-0 flex-1",
  props.top ? "justify-start" : "justify-center",
  props.avatar && "items-center w-10",
  props.thumbnail && "items-center w-16",
  props.side && "items-end text-muted",
  props.noWrap && "whitespace-nowrap",
])
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
