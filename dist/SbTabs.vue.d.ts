/**
 * Tab bar container inspired by Quasar's `QTabs`.
 *
 * Provides tab context (active tab, colors, density) to child `SbTab` and
 * `SbRouteTab` components via Vue's provide/inject. Can be used anywhere —
 * bottom nav, toolbars, settings panels.
 *
 * @example
 * ```vue
 * <SbTabs v-model="activeTab" stretch>
 *   <SbRouteTab name="home" icon="i-lucide-house" label="Home" to="/" exact />
 *   <SbRouteTab name="items" icon="i-lucide-package" label="Items" to="/items" />
 * </SbTabs>
 * ```
 */
export interface SbTabsProps {
    /** Currently active tab name (two-way binding via `v-model`). */
    modelValue?: string;
    /** Tailwind color class for active tab text (e.g., `"text-primary"`). */
    activeColor?: string;
    /** Reduce vertical padding on all child tabs. @defaultValue `false` */
    dense?: boolean;
    /** Show an indicator line under the active tab. @defaultValue `false` */
    indicator?: boolean;
    /** Tailwind color class for the indicator line (e.g., `"bg-primary"`). */
    indicatorColor?: string;
    /** Stretch tabs to fill the container width equally. @defaultValue `false` */
    stretch?: boolean;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<SbTabsProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<SbTabsProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    dense: boolean;
    indicator: boolean;
    stretch: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
