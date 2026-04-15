/**
 * Block-level section divider with label and optional trailing action.
 *
 * Use between page regions to label groups of content. Distinct from
 * `SbListLabel` with `header` (which lives *inside* a list as a group
 * divider) — this component stands alone between siblings.
 *
 * The trailing slot accommodates action links, buttons, or any widget
 * without prescribing what goes there.
 *
 * @example
 * ```vue
 * <SbSectionHeader label="Recent Items">
 *   <template #trailing>
 *     <UButton label="See all" variant="link" size="sm" />
 *   </template>
 * </SbSectionHeader>
 * ```
 */
export interface SbSectionHeaderProps {
    /** Section label text. */
    label: string;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<SbSectionHeaderProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SbSectionHeaderProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    trailing?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
