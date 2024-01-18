(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.easyest = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    name: "button",
    props: {
      type: null
    },
    setup(__props) {
      const buttonProps = __props;
      defineOptions({ name: "EaButton" });
      const buttonStyle = vue.computed(() => {
        return { [`ea-button--${buttonProps.type}`]: buttonProps.type };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", {
          class: vue.normalizeClass(["ea-button", vue.unref(buttonStyle)])
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  });
  const withInstall$1 = (comp) => {
    comp.install = (app) => {
      const name = comp.name;
      app.component(name, comp);
    };
    return comp;
  };
  const Button = withInstall$1(_sfc_main$1);
  const _hoisted_1 = { class: "icon" };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    name: "icon",
    setup(__props) {
      defineOptions({ name: "EaIcon" });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, " icon ");
      };
    }
  });
  const withInstall = (comp) => {
    comp.install = (app) => {
      const name = comp.name;
      app.component(name, comp);
    };
    return comp;
  };
  const Icon = withInstall(_sfc_main);
  const components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    Button,
    Icon
  }, Symbol.toStringTag, { value: "Module" }));
  const index = {
    install: (app) => {
      for (let c in components) {
        app.use(components[c]);
      }
    }
  };
  exports2.Button = Button;
  exports2.Icon = Icon;
  exports2.default = index;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
