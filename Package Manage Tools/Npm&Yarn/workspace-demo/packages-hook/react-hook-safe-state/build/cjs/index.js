"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hook_is_unmounted_1 = __importDefault(require("@workspace-demo/react-hook-is-unmounted"));
function useSafeState(initialState) {
    var _a = (0, react_1.useState)(initialState), state = _a[0], setState = _a[1];
    var isUnmounted = (0, react_hook_is_unmounted_1.default)();
    var setSafeState = (0, react_1.useCallback)(function (v) {
        if (!isUnmounted()) {
            setState(v);
        }
    }, [isUnmounted]);
    return [state, setSafeState];
}
exports.default = useSafeState;
//# sourceMappingURL=index.js.map