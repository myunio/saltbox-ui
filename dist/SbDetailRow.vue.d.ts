/**
 * Key-value metadata row for detail views.
 *
 * Displays a label on the left and a value on the right, with fallback
 * text when the value is empty. Composes `SbListItem` + `SbListSection`
 * internally for consistent list alignment.
 *
 * Use inside an `SbList` to build detail grids with consistent spacing.
 *
 * @example
 * ```vue
 * <SbList bordered separator>
 *   <SbDetailRow label="Brand" value="DeWalt" />
 *   <SbDetailRow label="Model" value="DCF887" mono />
 *   <SbDetailRow label="Serial" />
 * </SbList>
 * ```
 */
export interface SbDetailRowProps {
    /** The field label. */
    label: string;
    /** The field value. When absent, `fallback` is shown. */
    value?: string | null;
    /** Text shown when `value` is empty. @defaultValue `"Not set"` */
    fallback?: string;
    /** Render the value in monospace font at a smaller size. @defaultValue `false` */
    mono?: boolean;
    /** Optional secondary label beneath the primary label. */
    subLabel?: string;
}
declare const _default: import("vue").DefineComponent<SbDetailRowProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SbDetailRowProps> & Readonly<{}>, {
    fallback: string;
    mono: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
