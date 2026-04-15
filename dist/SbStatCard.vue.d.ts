/**
 * Single metric card displaying a value, label, and optional icon.
 *
 * Standalone — the parent owns the grid layout. Compose multiple
 * `SbStatCard` instances in a CSS grid for dashboard stat rows.
 *
 * Renders as a link when `to` is provided.
 *
 * @example
 * ```vue
 * <div class="grid grid-cols-3 gap-1">
 *   <SbStatCard :value="142" label="Items" icon="i-lucide-package" />
 *   <SbStatCard :value="23" label="Containers" icon="i-lucide-archive" />
 *   <SbStatCard :value="98" label="Cataloged" icon="i-lucide-check" />
 * </div>
 * ```
 */
export interface SbStatCardProps {
    /** The metric value to display. */
    value: number | string;
    /** Label beneath the value. */
    label: string;
    /** Optional icon identifier (e.g. "i-lucide-package"). */
    icon?: string;
    /** Optional navigation URL. When set, the card renders as a link. */
    to?: string;
    /** Add a border around the card. @defaultValue `false` */
    bordered?: boolean;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<SbStatCardProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SbStatCardProps> & Readonly<{}>, {
    bordered: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
