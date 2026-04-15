/**
 * Infinite scroll trigger with button fallback.
 *
 * Uses `IntersectionObserver` to automatically emit `load` when the
 * element scrolls into view. Also renders a visible "Load more" button
 * as a fallback for cases where the observer doesn't fire (e.g. content
 * is already in the viewport).
 *
 * Shows a loading state while the parent is fetching more data.
 *
 * @example
 * ```vue
 * <SbLoadMore :loading="isFetching" @load="fetchNextPage" />
 * ```
 */
export interface SbLoadMoreProps {
    /** Whether more data is currently being loaded. @defaultValue `false` */
    loading?: boolean;
    /** Button label. @defaultValue `"Load more"` */
    label?: string;
    /** Disable the observer and button (e.g. when all data is loaded). @defaultValue `false` */
    disabled?: boolean;
}
declare const _default: import("vue").DefineComponent<SbLoadMoreProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    load: () => any;
}, string, import("vue").PublicProps, Readonly<SbLoadMoreProps> & Readonly<{
    onLoad?: (() => any) | undefined;
}>, {
    label: string;
    disabled: boolean;
    loading: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
