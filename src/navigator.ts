import { type InjectionKey, type Ref, inject, ref } from "vue"

/**
 * Navigation adapter for Saltbox components.
 *
 * Host apps provide this via `provide(SB_NAVIGATOR_KEY, ...)` to plug in
 * their router (Inertia, Vue Router, etc.). Components that need navigation
 * call `useSbNavigator()` and fall back to `window.location` if no
 * provider is found.
 *
 * @example Inertia.js provider (in your root layout)
 * ```ts
 * import { router, usePage } from "@inertiajs/vue3"
 * import { SB_NAVIGATOR_KEY } from "@/components/saltbox/navigator"
 *
 * provide(SB_NAVIGATOR_KEY, {
 *   navigate: (url) => router.visit(url),
 *   currentUrl: computed(() => usePage().url),
 * })
 * ```
 */
export interface SbNavigator {
  /** Navigate to a URL. */
  navigate: (url: string) => void
  /** Reactive current URL for route matching. */
  currentUrl: Ref<string>
}

export const SB_NAVIGATOR_KEY: InjectionKey<SbNavigator> = Symbol("sb-navigator")

const fallback: SbNavigator = {
  navigate: (url) => {
    window.location.href = url
  },
  currentUrl: ref(typeof window !== "undefined" ? window.location.pathname : "/"),
}

export function useSbNavigator(): SbNavigator {
  return inject(SB_NAVIGATOR_KEY, fallback)
}
