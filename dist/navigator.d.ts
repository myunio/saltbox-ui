import { type InjectionKey, type Ref } from "vue";
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
    navigate: (url: string) => void;
    /** Reactive current URL for route matching. */
    currentUrl: Ref<string>;
}
export declare const SB_NAVIGATOR_KEY: InjectionKey<SbNavigator>;
export declare function useSbNavigator(): SbNavigator;
