/**
 * Individual tab within a `SbTabs` container, inspired by Quasar's `QTab`.
 *
 * Renders a button with icon and/or label. Active state is determined by
 * matching `name` against the parent `SbTabs` model value. For route-aware
 * tabs that navigate on click, use `SbRouteTab` instead.
 *
 * @example
 * ```vue
 * <SbTabs v-model="tab">
 *   <SbTab name="overview" icon="i-lucide-eye" label="Overview" />
 *   <SbTab name="details" icon="i-lucide-list" label="Details" />
 * </SbTabs>
 * ```
 */
export interface SbTabProps {
    /** Unique tab identifier. Matched against the parent `SbTabs` model value. */
    name: string;
    /** Icon class name (e.g., `"i-lucide-home"`). Rendered via `UIcon`. */
    icon?: string;
    /** Tab label text displayed below the icon. */
    label?: string;
    /** Disable interaction and dim the tab. @defaultValue `false` */
    disable?: boolean;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<SbTabProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import("vue").PublicProps, Readonly<SbTabProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    disable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
