/**
 * Fixed-width mini progress bar with fraction label.
 *
 * Displays a horizontal bar showing progress toward a total, with an
 * optional text label like "8 / 12". Three visual states are derived
 * automatically: **empty** (current = 0), **partial** (0 < current < total),
 * and **complete** (current >= total).
 *
 * The `size` prop controls width and height for different contexts:
 * `sm` for compact list rows, `md` for scope cards.
 *
 * @example
 * ```vue
 * <SbProgressBar :current="8" :total="12" size="sm" />
 * <SbProgressBar :current="12" :total="12" size="md" />
 * <SbProgressBar :current="0" :total="5" size="sm" />
 * ```
 */
export interface SbProgressBarProps {
    /** Number of completed items. */
    current: number;
    /** Total number of items. */
    total: number;
    /** Bar size. `sm` for list rows, `md` for cards. @defaultValue `"sm"` */
    size?: "sm" | "md";
    /** Show the fraction label (e.g. "8 / 12"). @defaultValue `true` */
    showLabel?: boolean;
}
declare const _default: import("vue").DefineComponent<SbProgressBarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SbProgressBarProps> & Readonly<{}>, {
    size: "sm" | "md";
    showLabel: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
