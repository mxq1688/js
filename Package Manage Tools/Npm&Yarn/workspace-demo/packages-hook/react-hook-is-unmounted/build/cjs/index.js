"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useIsUnmounted() {
    var ref = (0, react_1.useRef)(false);
    var isUnmounted = (0, react_1.useCallback)(function () { return ref.current; }, []);
    (0, react_1.useEffect)(function () {
        return function () {
            ref.current = true;
        };
    }, []);
    return isUnmounted;
}
exports.default = useIsUnmounted;
//# sourceMappingURL=index.js.map