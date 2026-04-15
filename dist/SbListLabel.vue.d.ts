/**
 * Text label within a `SbListSection`, inspired by Quasar's `QItemLabel`.
 *
 * Handles text styling and truncation for list item content. Four modes:
 * - **Default**: Primary text — `text-sm font-medium text-highlighted`
 * - **Caption** (`caption`): Secondary text — `text-xs text-muted`
 * - **Overline** (`overline`): Small uppercase text above the primary label
 * - **Header** (`header`): Section header with padding for grouping items
 *
 * Adjacent labels get spacing from the parent `SbListSection`'s flex gap.
 *
 * @example
 * ```vue
 * <SbListSection>
 *   <SbListLabel :lines="1">Item Name</SbListLabel>
 *   <SbListLabel caption :lines="1">Container path</SbListLabel>
 * </SbListSection>
 * ```
 */
export interface SbListLabelProps {
    /** Render as small uppercase overline text. @defaultValue `false` */
    overline?: boolean;
    /** Render as secondary caption/subtitle text. @defaultValue `false` */
    caption?: boolean;
    /** Render as a section header with padding. @defaultValue `false` */
    header?: boolean;
    /** Truncate text to N lines. `1` uses `truncate`, `2+` uses `-webkit-line-clamp`. */
    lines?: number;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<SbListLabelProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SbListLabelProps> & Readonly<{}>, {
    caption: boolean;
    header: boolean;
    overline: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
