/**
 * Route-aware tab within a `SbTabs` container, inspired by Quasar's `QRouteTab`.
 *
 * Like `SbTab` but navigates to a URL on click and determines its active state
 * from the current Inertia page URL. Renders as an `<a>` tag for accessibility
 * and progressive enhancement.
 *
 * @example
 * ```vue
 * <SbTabs v-model="tab" stretch>
 *   <SbRouteTab name="home" icon="i-lucide-house" label="Home" to="/" exact />
 *   <SbRouteTab name="items" icon="i-lucide-package" label="Items" to="/items" />
 * </SbTabs>
 * ```
 */
export interface SbRouteTabProps {
    /** Unique tab identifier. */
    name: string;
    /** Icon class name (e.g., `"i-lucide-home"`). Rendered via `UIcon`. */
    icon?: string;
    /** Tab label text displayed below the icon. */
    label?: string;
    /** Route path to navigate to on click. */
    to: string;
    /** Match route exactly instead of prefix matching. @defaultValue `false` */
    exact?: boolean;
    /** Disable interaction and dim the tab. @defaultValue `false` */
    disable?: boolean;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<SbRouteTabProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SbRouteTabProps> & Readonly<{}>, {
    disable: boolean;
    exact: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
