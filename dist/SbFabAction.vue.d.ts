/**
 * Speed-dial action button within a `SbFab`, inspired by Quasar's `QFabAction`.
 *
 * Renders as a smaller button that appears when the parent `SbFab` speed-dial
 * is open. Clicking an action navigates to `to` (if set), emits `click`,
 * and closes the parent speed-dial.
 *
 * @example
 * ```vue
 * <SbFab icon="i-lucide-plus" direction="up">
 *   <SbFabAction icon="i-lucide-camera" label="Photo" to="/capture" />
 *   <SbFabAction icon="i-lucide-pencil" label="Manual" to="/manual" />
 * </SbFab>
 * ```
 */
export interface SbFabActionProps {
    /** Icon class name rendered via `UIcon`. */
    icon?: string;
    /** Label text. When present, renders as a pill shape. */
    label?: string;
    /** Position of the label relative to the icon. @defaultValue `"left"` */
    labelPosition?: "top" | "right" | "bottom" | "left";
    /** Navigation URL. Navigates on click via Inertia router. */
    to?: string;
    /** Background color as a Tailwind class. @defaultValue `"bg-primary-50"` */
    color?: string;
    /** Use rounded-rectangle shape instead of circle. @defaultValue `false` */
    square?: boolean;
    /** Disable this action. @defaultValue `false` */
    disable?: boolean;
}
declare const _default: import("vue").DefineComponent<SbFabActionProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import("vue").PublicProps, Readonly<SbFabActionProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    disable: boolean;
    labelPosition: "top" | "right" | "bottom" | "left";
    color: string;
    square: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
