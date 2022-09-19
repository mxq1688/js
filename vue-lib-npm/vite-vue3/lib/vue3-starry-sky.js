import { ref as d, onMounted as p, openBlock as c, createElementBlock as _, createElementVNode as u, Fragment as i, renderList as m } from "vue";
const y = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [o, s] of e)
    r[o] = s;
  return r;
}, f = { class: "starry-sky-bg" }, h = { class: "stars" }, g = {
  __name: "starry-sky",
  props: {
    starsCount: {
      type: [Number, String],
      default: () => 800
    },
    distance: {
      type: [Number, String],
      default: () => 800
    }
  },
  setup(t) {
    const e = t, r = d();
    return p(() => {
      r.value.forEach((s) => {
        let a = 0.1 + Math.random() * 1, l = e.distance + Math.random() * 300;
        s.style.transformOrigin = `0 0 ${l}px`, s.style.transform = `translate3d(0,0,-${l}px) rotateY(${Math.random() * 360}deg) rotateX(${Math.random() * -50}deg) scale(${a},${a})`;
      });
    }), (o, s) => (c(), _("div", f, [
      u("div", h, [
        (c(!0), _(i, null, m(t.starsCount, (a) => (c(), _("div", {
          key: a,
          class: "star",
          ref_for: !0,
          ref_key: "star",
          ref: r
        }))), 128))
      ])
    ]));
  }
}, n = /* @__PURE__ */ y(g, [["__scopeId", "data-v-13b0c3b7"]]);
n.install = (t) => {
  t.component(n.__name, n);
};
const k = [n], v = (t) => {
  k.forEach((e) => {
    t.component(e.__name, e);
  });
}, x = {
  install: v
};
export {
  n as StarrySky,
  x as default
};
