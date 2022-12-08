var module = function(vue2) {
  "use strict";
  const name = "module";
  const Home_vue_vue_type_style_index_0_scoped_a21986af_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main = {};
  const _withScopeId = (n) => (vue2.pushScopeId("data-v-a21986af"), n = n(), vue2.popScopeId(), n);
  const _hoisted_1 = { class: "home" };
  const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue2.createElementVNode("p", null, "\u8FD9\u91CC\u662F\u6A21\u5757\u5DE5\u7A0B\u9875\u9762", -1));
  const _hoisted_3 = [
    _hoisted_2
  ];
  function _sfc_render(_ctx, _cache) {
    return vue2.openBlock(), vue2.createElementBlock("div", _hoisted_1, _hoisted_3);
  }
  const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a21986af"]]);
  const routes = [
    {
      path: "/module-page",
      name: "modulePage",
      component: Home
    }
  ];
  const module2 = {
    name,
    install(context) {
      console.log(context, 123);
      routes.forEach((item) => {
        context.app.config.globalProperties.$router.addRoute(item);
      });
    }
  };
  return module2;
}(vue);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmlpZmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9Ib21lLnZ1ZSIsIi4uLy4uL3NyYy9yb3V0ZXMuanMiLCIuLi8uLi9zcmMvbW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImhvbWVcIj5cbiAgICA8cD7ov5nph4zmmK/mqKHlnZflt6XnqIvpobXpnaI8L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBzY29wZWQ+XG4uaG9tZSBpbWcge1xuICB3aWR0aDogNTAlO1xufVxuPC9zdHlsZT5cbiIsImltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWUudnVlXCI7XG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBwYXRoOiBcIi9tb2R1bGUtcGFnZVwiLFxuICAgIG5hbWU6IFwibW9kdWxlUGFnZVwiLFxuICAgIGNvbXBvbmVudDogSG9tZSxcbiAgfSxcbl07XG4iLCJpbXBvcnQgeyBuYW1lIH0gZnJvbSBcIi4uL3BhY2thZ2UuanNvblwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIjtcbi8vIOWvvOWHuuaooeWdl+WumuS5ieWvueixoVxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lLFxuICBpbnN0YWxsKFxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtpbXBvcnQoJ3Z1ZS1tb2R1bGUtbG9hZGVyL3NyYy9pbnRlcmZhY2VzJykuQ29udGV4dH1cbiAgICAgKi9cbiAgICBjb250ZXh0XG4gICkge1xuICAgIGNvbnNvbGUubG9nKGNvbnRleHQsIDEyMyk7XG4gICAgcm91dGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb250ZXh0LmFwcC5jb25maWcuZ2xvYmFsUHJvcGVydGllcy4kcm91dGVyLmFkZFJvdXRlKGl0ZW0pO1xuICAgIH0pO1xuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJfcG9wU2NvcGVJZCIsIm1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ08sUUFBQSxlQUFBLGFBQVksWUFBQSxpQkFBQSxHQUFBLElBQUEsRUFBQSxHQUFBQSxnQkFBQSxHQUFBO0FBQ2YsUUFBQSxhQUFBLEVBQUEsT0FBQSxPQUFBOztRQUFnQixhQUFBO0FBQUE7O0FBRGxCLFdBQUEsWUFBQSxNQUFBLFFBQUE7Ozs7QUNBYSxRQUFBLFNBQUE7QUFBQSxJQUNiO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsSUFDWjtBQUFBLEVBQ0g7QUNKZSxRQUFBQyxVQUFBO0FBQUEsSUFDYjtBQUFBLElBQ0EsUUFJRSxTQUNBO0FBQ0EsY0FBUSxJQUFJLFNBQVMsR0FBRztBQUN4QixhQUFPLFFBQVEsVUFBUTtBQUNyQixnQkFBUSxJQUFJLE9BQU8saUJBQWlCLFFBQVEsU0FBUyxJQUFJO0FBQUEsTUFDL0QsQ0FBSztBQUFBLElBQ0Y7QUFBQSxFQUNIOzs7In0=
