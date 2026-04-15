/**
 * Composable list container inspired by Quasar's `QList`.
 *
 * Provides a semantic list wrapper with optional borders, item separators,
 * and density control. Compose with `SbListItem`, `SbListSection`, and
 * `SbListLabel` to build rich list UIs declaratively.
 *
 * List-level props like `dense` and `bordered` are communicated to child
 * `SbListItem` components via Tailwind group variants and data attributes,
 * so items automatically adjust their padding based on context.
 *
 * @example
 * ```vue
 * <SbList bordered separator>
 *   <SbListItem clickable to="/items/1">
 *     <SbListSection avatar>
 *       <UAvatar src="..." />
 *     </SbListSection>
 *     <SbListSection>
 *       <SbListLabel>Item Name</SbListLabel>
 *       <SbListLabel caption>Description</SbListLabel>
 *     </SbListSection>
 *   </SbListItem>
 * </SbList>
 * ```
 */
export interface SbListProps {
    /** HTML tag to render as. @defaultValue `"div"` */
    as?: string;
    /** Add a border around the entire list. @defaultValue `false` */
    bordered?: boolean;
    /** Add separator lines between items. @defaultValue `false` */
    separator?: boolean;
    /** Reduce vertical padding on all child items. @defaultValue `false` */
    dense?: boolean;
    /** Add vertical padding to the list container. @defaultValue `false` */
    padding?: boolean;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<SbListProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SbListProps> & Readonly<{}>, {
    as: string;
    bordered: boolean;
    separator: boolean;
    dense: boolean;
    padding: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
