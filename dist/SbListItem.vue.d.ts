/**
 * Individual row within a `SbList`, inspired by Quasar's `QItem`.
 *
 * Renders as a flex row that contains `SbListSection` children in the
 * standard three-column layout: avatar | main (expands) | side.
 *
 * Supports clickable states with hover/focus styling, navigation via
 * the `to` prop (renders as `<a>`), and active highlighting. Inherits
 * `dense` from the parent `SbList` or can be set per-item.
 *
 * @example
 * ```vue
 * <SbListItem clickable to="/items/1">
 *   <SbListSection avatar>...</SbListSection>
 *   <SbListSection>...</SbListSection>
 *   <SbListSection side>...</SbListSection>
 * </SbListItem>
 * ```
 */
export interface SbListItemProps {
    /** HTML tag to render as. Overridden to `"a"` when `to` is set. @defaultValue `"div"` */
    as?: string;
    /** Enable clickable hover/focus states. Automatically true when `to` is set. @defaultValue `false` */
    clickable?: boolean;
    /** Navigation URL. When set, renders as an anchor tag. */
    to?: string;
    /** Highlight this item as active. @defaultValue `false` */
    active?: boolean;
    /** Reduce vertical padding for this item. @defaultValue `false` */
    dense?: boolean;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<SbListItemProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import("vue").PublicProps, Readonly<SbListItemProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    as: string;
    dense: boolean;
    clickable: boolean;
    active: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
