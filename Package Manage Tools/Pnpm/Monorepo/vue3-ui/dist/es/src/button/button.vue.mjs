import { defineComponent as e, computed as u, openBlock as s, createElementBlock as a, normalizeClass as l, unref as p, renderSlot as c } from "vue";
import "./style/index.css";
const m = e({ name: "EaButton" }), b = /* @__PURE__ */ e({
  ...m,
  props: {
    type: null
  },
  setup(o) {
    const t = o, n = u(() => ({ [`ea-button--${t.type}`]: t.type }));
    return (r, f) => (s(), a("button", {
      class: l(["ea-button", p(n)])
    }, [
      c(r.$slots, "default")
    ], 2));
  }
});
export {
  b as default
};
