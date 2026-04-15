/**
 * Labeled list section: header + bordered list with correct spacing.
 *
 * Composes `SbSectionHeader` and `SbList` with the spacing relationship
 * baked in so callers don't have to remember the gap between header and
 * list. This pattern repeats 5+ times across the app — dashboard
 * sections, container sub-lists, loose items groups, needs-attention.
 *
 * The default slot receives the list body (populate with `SbListItem`
 * or any list content). The `trailing` slot passes through to
 * `SbSectionHeader` for action links.
 *
 * @example
 * ```vue
 * <SbSectionedList label="Recent Items">
 *   <template #trailing>
 *     <UButton label="See all" variant="link" size="sm" />
 *   </template>
 *   <SbListItem v-for="item in items" :key="item.id" clickable>
 *     ...
 *   </SbListItem>
 * </SbSectionedList>
 * ```
 */
export interface SbSectionedListProps {
    /** Section header label. */
    label: string;
    /** Pass `bordered` to the inner SbList. @defaultValue `false` */
    bordered?: boolean;
    /** Pass `separator` to the inner SbList. @defaultValue `true` */
    separator?: boolean;
    /** Pass `dense` to the inner SbList. @defaultValue `false` */
    dense?: boolean;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<SbSectionedListProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SbSectionedListProps> & Readonly<{}>, {
    bordered: boolean;
    separator: boolean;
    dense: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    trailing?: (props: {}) => any;
} & {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
