/**
 * Column section within a `SbListItem`, inspired by Quasar's `QItemSection`.
 *
 * Controls the flex layout of content within a list item row. Three roles:
 * - **Main** (default): Fills available space, truncates content. Use for title/description.
 * - **Avatar/Thumbnail** (`avatar` or `thumbnail`): Fixed-width leading column for images/icons.
 * - **Side** (`side`): Trailing column for badges, timestamps, action icons.
 *
 * @example
 * ```vue
 * <SbListItem>
 *   <SbListSection avatar><!-- icon/avatar --></SbListSection>
 *   <SbListSection><!-- title + caption --></SbListSection>
 *   <SbListSection side><!-- trailing content --></SbListSection>
 * </SbListItem>
 * ```
 */
export interface SbListSectionProps {
    /** Fixed-width leading column for avatars/icons (40px). @defaultValue `false` */
    avatar?: boolean;
    /** Fixed-width leading column for thumbnails (64px). @defaultValue `false` */
    thumbnail?: boolean;
    /** Trailing column, right-aligned with muted text color. @defaultValue `false` */
    side?: boolean;
    /** Align content to top instead of vertically centering. @defaultValue `false` */
    top?: boolean;
    /** Prevent text wrapping in this section. @defaultValue `false` */
    noWrap?: boolean;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<SbListSectionProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SbListSectionProps> & Readonly<{}>, {
    avatar: boolean;
    thumbnail: boolean;
    side: boolean;
    top: boolean;
    noWrap: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
