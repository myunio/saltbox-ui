import { computed as e, createBlock as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, createTextVNode as a, createVNode as o, defineComponent as s, inject as c, mergeProps as l, normalizeClass as u, normalizeStyle as d, onBeforeUnmount as f, onMounted as p, openBlock as m, provide as h, ref as g, renderSlot as _, resolveComponent as v, resolveDynamicComponent as y, toDisplayString as b, toRef as x, unref as S, useSlots as C, watch as w, withCtx as T } from "vue";
//#endregion
//#region src/SbList.vue
var E = /* @__PURE__ */ s({
	__name: "SbList",
	props: {
		as: { default: "div" },
		bordered: {
			type: Boolean,
			default: !1
		},
		separator: {
			type: Boolean,
			default: !1
		},
		dense: {
			type: Boolean,
			default: !1
		},
		padding: {
			type: Boolean,
			default: !1
		}
	},
	setup(n) {
		let r = n, i = e(() => r.as), a = e(() => [
			"sb-list",
			"group/list",
			r.bordered && "border border-default rounded-lg",
			r.separator && "divide-y divide-default",
			r.padding && "py-2"
		]);
		return (e, r) => (m(), t(y(i.value), {
			role: i.value === "ul" || i.value === "ol" ? void 0 : "list",
			class: u(a.value),
			"data-bordered": n.bordered || void 0,
			"data-dense": n.dense || void 0
		}, {
			default: T(() => [_(e.$slots, "default")]),
			_: 3
		}, 8, [
			"role",
			"class",
			"data-bordered",
			"data-dense"
		]));
	}
}), D = /* @__PURE__ */ s({
	__name: "SbListItem",
	props: {
		as: { default: "div" },
		clickable: {
			type: Boolean,
			default: !1
		},
		to: {},
		active: {
			type: Boolean,
			default: !1
		},
		dense: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["click"],
	setup(n, { emit: r }) {
		let i = n, a = r, o = e(() => i.dense), s = e(() => i.clickable || !!i.to), c = e(() => i.to ? "a" : i.as), u = e(() => i.to ? { href: i.to } : {}), d = e(() => [
			"sb-list-item",
			"flex items-center gap-2",
			o.value ? "py-1" : "py-2 group-data-[dense]/list:py-1",
			"group-data-[bordered]/list:px-4",
			s.value && "cursor-pointer transition-colors hover:bg-elevated/50",
			s.value && "focus-visible:outline-none focus-visible:bg-elevated/50",
			i.active && "bg-elevated/50"
		]);
		function f(e) {
			a("click", e);
		}
		return (e, n) => (m(), t(y(c.value), l({
			role: "listitem",
			class: d.value
		}, u.value, {
			tabindex: s.value ? 0 : void 0,
			onClick: f
		}), {
			default: T(() => [_(e.$slots, "default")]),
			_: 3
		}, 16, ["class", "tabindex"]));
	}
}), O = /* @__PURE__ */ s({
	__name: "SbListSection",
	props: {
		avatar: {
			type: Boolean,
			default: !1
		},
		thumbnail: {
			type: Boolean,
			default: !1
		},
		side: {
			type: Boolean,
			default: !1
		},
		top: {
			type: Boolean,
			default: !1
		},
		noWrap: {
			type: Boolean,
			default: !1
		}
	},
	setup(t) {
		let n = t, i = e(() => n.avatar || n.side || n.thumbnail), a = e(() => [
			"sb-list-section",
			"flex flex-col gap-0.5",
			i.value ? "shrink-0" : "min-w-0 flex-1",
			n.top ? "justify-start" : "justify-center",
			n.avatar && "items-center w-10",
			n.thumbnail && "items-center w-16",
			n.side && "items-end text-muted",
			n.noWrap && "whitespace-nowrap"
		]);
		return (e, t) => (m(), r("div", { class: u(a.value) }, [_(e.$slots, "default")], 2));
	}
}), k = /* @__PURE__ */ s({
	__name: "SbListLabel",
	props: {
		overline: {
			type: Boolean,
			default: !1
		},
		caption: {
			type: Boolean,
			default: !1
		},
		header: {
			type: Boolean,
			default: !1
		},
		lines: {}
	},
	setup(t) {
		let n = t, i = e(() => [
			"sb-list-label max-w-full",
			n.overline && "text-xs uppercase tracking-wide text-muted",
			n.caption && "text-xs text-muted",
			n.header && "text-xs font-semibold text-muted uppercase tracking-wide py-2 group-data-[bordered]/list:px-4",
			!n.overline && !n.caption && !n.header && "text-sm font-medium text-highlighted",
			n.lines === 1 && "truncate",
			n.lines === 2 && "line-clamp-2",
			n.lines === 3 && "line-clamp-3",
			n.lines === 4 && "line-clamp-4",
			n.lines === 5 && "line-clamp-5"
		]);
		return (e, t) => (m(), r("div", { class: u(i.value) }, [_(e.$slots, "default")], 2));
	}
}), A = /* @__PURE__ */ s({
	__name: "SbTabs",
	props: {
		modelValue: {},
		activeColor: {},
		dense: {
			type: Boolean,
			default: !1
		},
		indicator: {
			type: Boolean,
			default: !1
		},
		indicatorColor: {},
		stretch: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["update:modelValue"],
	setup(t, { emit: n }) {
		let i = t, a = n;
		h("sb-tabs", {
			activeTab: x(i, "modelValue"),
			activeColor: x(i, "activeColor"),
			dense: x(i, "dense"),
			indicator: x(i, "indicator"),
			indicatorColor: x(i, "indicatorColor"),
			select(e) {
				a("update:modelValue", e);
			}
		});
		let o = e(() => [
			"sb-tabs",
			"flex items-center",
			i.stretch ? "w-full" : "gap-1"
		]);
		return (e, t) => (m(), r("nav", {
			class: u(o.value),
			role: "tablist"
		}, [_(e.$slots, "default")], 2));
	}
}), j = [
	"aria-selected",
	"aria-disabled",
	"tabindex"
], M = { key: 1 }, N = /* @__PURE__ */ s({
	__name: "SbTab",
	props: {
		name: {},
		icon: {},
		label: {},
		disable: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["click"],
	setup(i, { emit: a }) {
		let o = i, s = a, l = c("sb-tabs", null), d = e(() => l?.activeTab.value === o.name), f = e(() => [
			"sb-tab",
			"flex flex-col items-center justify-center gap-1",
			"flex-1 min-w-0",
			l?.dense.value ? "py-1" : "py-2",
			"text-xs font-medium transition-colors",
			o.disable && "opacity-50 pointer-events-none",
			!o.disable && "cursor-pointer",
			d.value ? l?.activeColor.value || "text-primary" : "text-muted hover:text-highlighted"
		]);
		function p(e) {
			o.disable || (l?.select(o.name), s("click", e));
		}
		return (e, a) => {
			let o = v("UIcon");
			return m(), r("button", {
				class: u(f.value),
				role: "tab",
				"aria-selected": d.value,
				"aria-disabled": i.disable || void 0,
				tabindex: i.disable ? -1 : 0,
				onClick: p
			}, [
				i.icon ? (m(), t(o, {
					key: 0,
					name: i.icon,
					class: "size-5"
				}, null, 8, ["name"])) : n("", !0),
				i.label ? (m(), r("span", M, b(i.label), 1)) : n("", !0),
				_(e.$slots, "default"),
				S(l)?.indicator.value && d.value ? (m(), r("span", {
					key: 2,
					class: u(["absolute right-1/4 bottom-0 left-1/4 h-0.5 rounded-full", S(l)?.indicatorColor || "bg-primary"])
				}, null, 2)) : n("", !0)
			], 10, j);
		};
	}
}), P = Symbol("sb-navigator"), F = {
	navigate: (e) => {
		window.location.href = e;
	},
	currentUrl: g(typeof window < "u" ? window.location.pathname : "/")
};
function I() {
	return c(P, F);
}
//#endregion
//#region src/SbRouteTab.vue?vue&type=script&setup=true&lang.ts
var L = [
	"href",
	"aria-selected",
	"aria-disabled",
	"tabindex"
], R = { key: 1 }, z = /* @__PURE__ */ s({
	__name: "SbRouteTab",
	props: {
		name: {},
		icon: {},
		label: {},
		to: {},
		exact: {
			type: Boolean,
			default: !1
		},
		disable: {
			type: Boolean,
			default: !1
		}
	},
	setup(i) {
		let a = i, o = c("sb-tabs", null), { navigate: s, currentUrl: l } = I(), d = e(() => {
			let e = l.value;
			return a.exact ? e === a.to || e === a.to + "/" : e.startsWith(a.to);
		}), f = e(() => [
			"sb-tab sb-route-tab",
			"flex flex-col items-center justify-center gap-1",
			"flex-1 min-w-0",
			o?.dense.value ? "py-1" : "py-2",
			"text-xs font-medium transition-colors",
			a.disable && "opacity-50 pointer-events-none",
			!a.disable && "cursor-pointer",
			d.value ? o?.activeColor.value || "text-primary" : "text-muted hover:text-highlighted"
		]);
		function p(e) {
			e.preventDefault(), !a.disable && (o?.select(a.name), s(a.to));
		}
		return (e, a) => {
			let s = v("UIcon");
			return m(), r("a", {
				href: i.to,
				class: u(f.value),
				role: "tab",
				"aria-selected": d.value,
				"aria-disabled": i.disable || void 0,
				tabindex: i.disable ? -1 : 0,
				onClick: p
			}, [
				i.icon ? (m(), t(s, {
					key: 0,
					name: i.icon,
					class: "size-5"
				}, null, 8, ["name"])) : n("", !0),
				i.label ? (m(), r("span", R, b(i.label), 1)) : n("", !0),
				_(e.$slots, "default"),
				S(o)?.indicator.value && d.value ? (m(), r("span", {
					key: 2,
					class: u(["absolute right-1/4 bottom-0 left-1/4 h-0.5 rounded-full", S(o)?.indicatorColor || "bg-primary"])
				}, null, 2)) : n("", !0)
			], 10, L);
		};
	}
}), B = {
	key: 1,
	class: "font-medium"
}, V = /* @__PURE__ */ s({
	__name: "SbFab",
	props: {
		icon: {},
		activeIcon: { default: "i-lucide-x" },
		hideIcon: {
			type: Boolean,
			default: !1
		},
		label: {},
		labelPosition: { default: "right" },
		hideLabel: {
			type: Boolean,
			default: !1
		},
		to: {},
		color: { default: "bg-primary" },
		size: { default: "lg" },
		square: {
			type: Boolean,
			default: !1
		},
		direction: { default: "up" },
		persistent: {
			type: Boolean,
			default: !1
		},
		disable: {
			type: Boolean,
			default: !1
		},
		modelValue: { type: Boolean }
	},
	emits: ["update:modelValue", "click"],
	setup(i, { emit: a }) {
		let o = i, s = a, { navigate: c } = I(), l = C(), d = e(() => !!l.default), f = g(o.modelValue ?? !1);
		w(() => o.modelValue, (e) => {
			e !== void 0 && (f.value = e);
		});
		function p(e) {
			f.value = e, s("update:modelValue", e);
		}
		h("sb-fab", {
			isOpen: f,
			onChildClick(e) {
				p(!1);
			}
		});
		let x = e(() => d.value && f.value ? o.activeIcon : o.icon), S = e(() => !!o.label && !o.hideLabel), E = e(() => S.value ? {
			sm: "h-10 px-4 text-sm",
			md: "h-12 px-4 text-sm",
			lg: "h-14 px-6 text-base"
		}[o.size] : {
			sm: "size-10",
			md: "size-12",
			lg: "size-14"
		}[o.size]), D = e(() => ({
			sm: "size-4",
			md: "size-5",
			lg: "size-6"
		})[o.size]), O = e(() => o.square ? "rounded-lg" : "rounded-full"), k = e(() => [
			"sb-fab__trigger",
			"inline-flex items-center justify-center gap-2",
			"text-white shadow-lg",
			"transition-all duration-200",
			"hover:shadow-xl hover:scale-105",
			"active:scale-95",
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
			o.color,
			O.value,
			E.value,
			o.disable && "opacity-50 pointer-events-none"
		]), A = e(() => [
			"sb-fab__actions flex gap-2 transition-all duration-200",
			{
				up: "flex-col items-end pb-2",
				down: "flex-col items-end pt-2",
				left: "flex-row-reverse items-center pr-2",
				right: "flex-row items-center pl-2"
			}[o.direction],
			f.value ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
		]), j = e(() => ["sb-fab inline-flex", {
			up: "flex-col items-end",
			down: "flex-col items-end",
			left: "flex-row items-center",
			right: "flex-row items-center"
		}[o.direction]]);
		function M(e) {
			o.disable || (s("click", e), d.value ? p(!f.value) : o.to && (e.preventDefault(), c(o.to)));
		}
		return (e, a) => {
			let o = v("UIcon");
			return m(), r("div", { class: u(j.value) }, [d.value ? (m(), r("div", {
				key: 0,
				class: u(A.value)
			}, [_(e.$slots, "default")], 2)) : n("", !0), (m(), t(y(!d.value && i.to ? "a" : "button"), {
				href: !d.value && i.to ? i.to : void 0,
				class: u(k.value),
				disabled: i.disable || void 0,
				"aria-expanded": d.value ? f.value : void 0,
				"aria-haspopup": d.value ? "true" : void 0,
				onClick: M
			}, {
				default: T(() => [!i.hideIcon && x.value ? (m(), t(o, {
					key: 0,
					name: x.value,
					class: u([
						D.value,
						d.value && "transition-transform duration-200",
						d.value && f.value && "rotate-90"
					])
				}, null, 8, ["name", "class"])) : n("", !0), i.label && !i.hideLabel ? (m(), r("span", B, b(i.label), 1)) : n("", !0)]),
				_: 1
			}, 8, [
				"href",
				"class",
				"disabled",
				"aria-expanded",
				"aria-haspopup"
			]))], 2);
		};
	}
}), H = /* @__PURE__ */ s({
	__name: "SbFabAction",
	props: {
		icon: {},
		label: {},
		labelPosition: { default: "left" },
		to: {},
		color: { default: "bg-primary-50" },
		square: {
			type: Boolean,
			default: !1
		},
		disable: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["click"],
	setup(i, { emit: a }) {
		let o = i, s = a, { navigate: l } = I(), d = c("sb-fab", null), f = e(() => [
			"sb-fab-action",
			"inline-flex items-center gap-2",
			"shadow-md",
			"transition-all duration-150",
			"hover:shadow-lg hover:scale-105",
			"active:scale-95",
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
			o.label ? `${o.square ? "rounded-lg" : "rounded-full"} h-10 px-4` : `${o.square ? "rounded-lg" : "rounded-full"} size-10`,
			o.color,
			o.disable && "opacity-50 pointer-events-none"
		]), p = e(() => ["text-sm font-medium", o.color === "bg-primary-50" ? "text-primary" : "text-white"]);
		function h(e) {
			o.disable || (s("click", e), d?.onChildClick(e), o.to && (e.preventDefault(), l(o.to)));
		}
		return (e, a) => {
			let o = v("UIcon");
			return m(), t(y(i.to ? "a" : "button"), {
				href: i.to,
				class: u(f.value),
				disabled: i.disable || void 0,
				role: "menuitem",
				onClick: h
			}, {
				default: T(() => [i.icon ? (m(), t(o, {
					key: 0,
					name: i.icon,
					class: u(["size-5", i.color === "bg-primary-50" ? "text-primary" : "text-white"])
				}, null, 8, ["name", "class"])) : n("", !0), i.label ? (m(), r("span", {
					key: 1,
					class: u(p.value)
				}, b(i.label), 3)) : n("", !0)]),
				_: 1
			}, 8, [
				"href",
				"class",
				"disabled"
			]);
		};
	}
}), U = { class: "flex items-center justify-between" }, W = { class: "text-highlighted text-sm font-semibold" }, G = /* @__PURE__ */ s({
	__name: "SbSectionHeader",
	props: { label: {} },
	setup(e) {
		return (t, n) => (m(), r("div", U, [i("h2", W, b(e.label), 1), _(t.$slots, "trailing")]));
	}
}), K = { class: "flex flex-col gap-2" }, q = /* @__PURE__ */ s({
	__name: "SbSectionedList",
	props: {
		label: {},
		bordered: {
			type: Boolean,
			default: !1
		},
		separator: {
			type: Boolean,
			default: !0
		},
		dense: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		return (t, n) => (m(), r("div", K, [o(G, { label: e.label }, {
			trailing: T(() => [_(t.$slots, "trailing")]),
			_: 3
		}, 8, ["label"]), o(E, {
			bordered: e.bordered,
			separator: e.separator,
			dense: e.dense
		}, {
			default: T(() => [_(t.$slots, "default")]),
			_: 3
		}, 8, [
			"bordered",
			"separator",
			"dense"
		])]));
	}
}), J = { class: "flex flex-col gap-1" }, Y = /* @__PURE__ */ s({
	__name: "SbProgressBar",
	props: {
		current: {},
		total: {},
		size: { default: "sm" },
		showLabel: {
			type: Boolean,
			default: !0
		}
	},
	setup(t) {
		let a = t, o = e(() => a.total <= 0 ? 0 : Math.min(100, Math.round(a.current / a.total * 100))), s = e(() => a.current <= 0 ? "empty" : a.current >= a.total ? "complete" : "partial"), c = e(() => ["rounded-full overflow-hidden bg-accented", a.size === "sm" ? "h-1.5 w-16" : "h-2 w-24"]), l = e(() => ["h-full rounded-full transition-all", s.value === "complete" ? "bg-[var(--ui-success)]" : "bg-[var(--ui-primary)]"]), f = e(() => ["tabular-nums whitespace-nowrap font-medium", a.size === "sm" ? "text-[10px] text-muted" : "text-xs text-muted"]);
		return (e, a) => (m(), r("div", J, [t.showLabel ? (m(), r("span", {
			key: 0,
			class: u(f.value)
		}, b(t.current) + "/" + b(t.total), 3)) : n("", !0), i("div", { class: u(c.value) }, [o.value > 0 ? (m(), r("div", {
			key: 0,
			class: u(l.value),
			style: d({ width: `${o.value}%` })
		}, null, 6)) : n("", !0)], 2)]));
	}
}), X = { class: "flex items-center gap-1" }, Z = { class: "text-highlighted text-xl font-semibold tabular-nums lg:text-2xl" }, Q = { class: "text-muted text-xs uppercase" }, $ = /* @__PURE__ */ s({
	__name: "SbStatCard",
	props: {
		value: {},
		label: {},
		icon: {},
		to: {},
		bordered: {
			type: Boolean,
			default: !1
		}
	},
	setup(r) {
		let a = r, o = e(() => a.to ? "a" : "div"), s = e(() => a.to ? { href: a.to } : {}), c = e(() => typeof a.value == "number" ? a.value.toLocaleString() : a.value);
		return (e, a) => {
			let u = v("UIcon");
			return m(), t(y(o.value), l(s.value, { class: ["flex flex-col items-center gap-1 rounded-lg p-4", [r.to && "hover:bg-elevated/50 cursor-pointer transition-colors", r.bordered && "border-default border"]] }), {
				default: T(() => [
					i("div", X, [r.icon ? (m(), t(u, {
						key: 0,
						name: r.icon,
						class: "text-primary size-4 lg:size-5"
					}, null, 8, ["name"])) : n("", !0), i("span", Z, b(c.value), 1)]),
					i("span", Q, b(r.label), 1),
					_(e.$slots, "default")
				]),
				_: 3
			}, 16, ["class"]);
		};
	}
}), ee = /* @__PURE__ */ s({
	__name: "SbDetailRow",
	props: {
		label: {},
		value: {},
		fallback: { default: "Not set" },
		mono: {
			type: Boolean,
			default: !1
		},
		subLabel: {}
	},
	setup(e) {
		return (r, s) => (m(), t(D, null, {
			default: T(() => [o(O, null, {
				default: T(() => [o(k, { caption: "" }, {
					default: T(() => [a(b(e.label), 1)]),
					_: 1
				}), e.subLabel ? (m(), t(k, {
					key: 0,
					caption: "",
					class: "text-xs"
				}, {
					default: T(() => [a(b(e.subLabel), 1)]),
					_: 1
				})) : n("", !0)]),
				_: 1
			}), o(O, { side: "" }, {
				default: T(() => [i("span", { class: u([e.value ? "text-highlighted" : "text-muted", e.mono ? "font-mono text-xs" : "text-sm"]) }, b(e.value ?? e.fallback), 3)]),
				_: 1
			})]),
			_: 1
		}));
	}
}), te = { class: "flex items-center justify-between" }, ne = { class: "flex items-center gap-2" }, re = { class: "flex items-center gap-2" }, ie = /* @__PURE__ */ s({
	__name: "SbResultsBar",
	setup(e) {
		return (e, t) => (m(), r("div", te, [i("div", ne, [_(e.$slots, "left")]), i("div", re, [_(e.$slots, "right")])]));
	}
}), ae = /* @__PURE__ */ s({
	__name: "SbLoadMore",
	props: {
		loading: {
			type: Boolean,
			default: !1
		},
		label: { default: "Load more" },
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["load"],
	setup(e, { emit: i }) {
		let a = e, o = i, s = g(null), c = null;
		function l(e) {
			e[0]?.isIntersecting && !a.loading && !a.disabled && o("load");
		}
		p(() => {
			s.value && (c = new IntersectionObserver(l, { rootMargin: "200px" }), c.observe(s.value));
		}), f(() => {
			c?.disconnect();
		}), w(() => a.disabled, (e) => {
			e && c?.disconnect();
		});
		function u() {
			!a.loading && !a.disabled && o("load");
		}
		return (i, a) => {
			let o = v("UButton");
			return m(), r("div", {
				ref_key: "sentinel",
				ref: s
			}, [e.disabled ? n("", !0) : (m(), t(o, {
				key: 0,
				label: e.loading ? "Loading…" : e.label,
				loading: e.loading,
				disabled: e.loading,
				variant: "ghost",
				color: "neutral",
				size: "sm",
				onClick: u
			}, null, 8, [
				"label",
				"loading",
				"disabled"
			]))], 512);
		};
	}
});
//#endregion
export { P as SB_NAVIGATOR_KEY, ee as SbDetailRow, V as SbFab, H as SbFabAction, E as SbList, D as SbListItem, k as SbListLabel, O as SbListSection, ae as SbLoadMore, Y as SbProgressBar, ie as SbResultsBar, z as SbRouteTab, G as SbSectionHeader, q as SbSectionedList, $ as SbStatCard, N as SbTab, A as SbTabs, I as useSbNavigator };
