# Saltbox UI

A composable UI component library for Vue 3 applications. Small, focused primitives that compose into rich interfaces.

## Components

**Lists** — `SbList`, `SbListItem`, `SbListSection`, `SbListLabel`, `SbDetailRow`, `SbSectionedList`

**Tabs** — `SbTabs`, `SbTab`, `SbRouteTab`

**FAB** — `SbFab`, `SbFabAction`

**Data Display** — `SbProgressBar`, `SbStatCard`, `SbSectionHeader`

**Controls** — `SbResultsBar`, `SbLoadMore`

## Install

```bash
pnpm add @myunio/saltbox-ui
```

Peer dependencies: `vue >=3.5`, `@nuxt/ui >=4.0`, `tailwindcss >=4.0`

## Usage

```vue
<script setup lang="ts">
import { SbList, SbListItem, SbListSection, SbListLabel } from "@myunio/saltbox-ui"
</script>

<template>
  <SbList bordered separator>
    <SbListItem clickable>
      <SbListSection>
        <SbListLabel>Item title</SbListLabel>
        <SbListLabel caption>Supporting text</SbListLabel>
      </SbListSection>
    </SbListItem>
  </SbList>
</template>
```

## Navigation

Components that navigate (`SbRouteTab`, `SbFab`, `SbFabAction`) use a pluggable navigator. Provide your router adapter at the app root:

```ts
import { SB_NAVIGATOR_KEY } from "@myunio/saltbox-ui"

// Inertia.js
provide(SB_NAVIGATOR_KEY, {
  navigate: (url) => router.visit(url),
  currentUrl: computed(() => usePage().url),
})

// Vue Router
provide(SB_NAVIGATOR_KEY, {
  navigate: (url) => router.push(url),
  currentUrl: computed(() => route.path),
})
```

If no provider is given, navigation falls back to `window.location`.

## License

MIT
