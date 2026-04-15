/**
 * Floating Action Button with optional speed-dial, inspired by Quasar's `QFab`.
 *
 * When used without child `SbFabAction` components, acts as a simple floating
 * button that navigates via `to` or emits `click`. When `SbFabAction` children
 * are provided, clicking the FAB toggles a speed-dial menu that fans out in
 * the specified `direction`.
 *
 * Supports round or square shapes, three sizes, pill shape with label,
 * and icon swapping between open/closed states.
 *
 * @example Simple FAB
 * ```vue
 * <SbFab icon="i-lucide-plus" to="/items/new" class="fixed bottom-4 right-4" />
 * ```
 *
 * @example Speed-dial FAB
 * ```vue
 * <SbFab icon="i-lucide-camera" active-icon="i-lucide-x" direction="up" square>
 *   <SbFabAction icon="i-lucide-camera" label="Photo" to="/capture" square />
 *   <SbFabAction icon="i-lucide-scan-qr-code" label="Scan QR" to="/scan" square />
 * </SbFab>
 * ```
 */
export interface SbFabProps {
    /** Icon displayed when the FAB is closed. */
    icon?: string;
    /** Icon displayed when the speed-dial is open. @defaultValue `"i-lucide-x"` */
    activeIcon?: string;
    /** Hide the icon entirely. @defaultValue `false` */
    hideIcon?: boolean;
    /** Label text. When present, renders as a pill shape instead of a circle. */
    label?: string;
    /** Position of the label relative to the icon. @defaultValue `"right"` */
    labelPosition?: "top" | "right" | "bottom" | "left";
    /** Hide the label while keeping the pill shape. @defaultValue `false` */
    hideLabel?: boolean;
    /** Navigation URL for simple (non-speed-dial) FABs. Ignored when actions are present. */
    to?: string;
    /** Background color as a Tailwind class. @defaultValue `"bg-primary"` */
    color?: string;
    /** Button size. @defaultValue `"lg"` */
    size?: "sm" | "md" | "lg";
    /** Use rounded-rectangle shape instead of circle. @defaultValue `false` */
    square?: boolean;
    /** Direction child actions fan out. @defaultValue `"up"` */
    direction?: "up" | "down" | "left" | "right";
    /** Keep the speed-dial open on route change. @defaultValue `false` */
    persistent?: boolean;
    /** Disable the FAB. @defaultValue `false` */
    disable?: boolean;
    /** Control the open/closed state of the speed-dial (two-way binding via `v-model`). */
    modelValue?: boolean;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<SbFabProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
    "update:modelValue": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<SbFabProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    disable: boolean;
    size: "sm" | "md" | "lg";
    activeIcon: string;
    hideIcon: boolean;
    labelPosition: "top" | "right" | "bottom" | "left";
    hideLabel: boolean;
    color: string;
    square: boolean;
    direction: "up" | "down" | "left" | "right";
    persistent: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
