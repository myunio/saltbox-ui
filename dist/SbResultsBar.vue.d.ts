/**
 * Toolbar between filters and results.
 *
 * Slot-based layout: left side typically holds a result count and clear
 * button, right side holds sort controls or other actions. The bar
 * provides the flexbox skeleton — callers fill the slots with whatever
 * controls their page needs.
 *
 * @example
 * ```vue
 * <SbResultsBar>
 *   <template #left>
 *     <span class="text-sm text-muted">142 items</span>
 *   </template>
 *   <template #right>
 *     <UButton label="Sort" variant="ghost" size="sm" />
 *   </template>
 * </SbResultsBar>
 * ```
 */
export interface SbResultsBarProps {
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<SbResultsBarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SbResultsBarProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    left?: (props: {}) => any;
} & {
    right?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
