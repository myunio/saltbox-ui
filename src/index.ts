/**
 * Saltbox Components
 *
 * A composable Vue component library inspired by Quasar's API patterns,
 * built with standalone Tailwind CSS. Designed for extraction as an npm
 * package usable across multiple applications.
 *
 * **Lists** — `SbList`, `SbListItem`, `SbListSection`, `SbListLabel`
 * **Tabs** — `SbTabs`, `SbTab`, `SbRouteTab`
 * **FAB** — `SbFab`, `SbFabAction`
 *
 * @packageDocumentation
 */

// Lists
export { default as SbList } from "./SbList.vue"
export { default as SbListItem } from "./SbListItem.vue"
export { default as SbListSection } from "./SbListSection.vue"
export { default as SbListLabel } from "./SbListLabel.vue"

// Tabs
export { default as SbTabs } from "./SbTabs.vue"
export { default as SbTab } from "./SbTab.vue"
export { default as SbRouteTab } from "./SbRouteTab.vue"

// FAB
export { default as SbFab } from "./SbFab.vue"
export { default as SbFabAction } from "./SbFabAction.vue"

// Sections & Headers
export { default as SbSectionHeader } from "./SbSectionHeader.vue"
export { default as SbSectionedList } from "./SbSectionedList.vue"

// Data Display
export { default as SbProgressBar } from "./SbProgressBar.vue"
export { default as SbStatCard } from "./SbStatCard.vue"
export { default as SbDetailRow } from "./SbDetailRow.vue"

// Toolbars & Controls
export { default as SbResultsBar } from "./SbResultsBar.vue"
export { default as SbLoadMore } from "./SbLoadMore.vue"

// Navigation
export { SB_NAVIGATOR_KEY, useSbNavigator } from "./navigator"
export type { SbNavigator } from "./navigator"
