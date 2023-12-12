import { defineCustomElement, ref, h } from "vue";
const MyVueElement = defineCustomElement({
  setup() {
    const count = ref(0);
    return () =>
      h(
        "div",
        {
          onClick: () => count.value++,
        },
        `点击${count.value}`
      );
  },
});

customElements.define("my-vue-element", MyVueElement);

const Test = {
  setup() {
    const inst = getCurrentInstance();
    console.log("inst", inst);

    Object.assign(inst.appContext, app._context);
    console.log(inst.appContext, App);

    return () => h(App);
  },
};

customElements.define("my-vue-element", defineCustomElement(Test));
