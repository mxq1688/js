import { useCallback, useState } from 'react';
import useIsUnmounted from '@workspace-demo/react-hook-is-unmounted';
export default function useSafeState(initialState) {
    var _a = useState(initialState), state = _a[0], setState = _a[1];
    var isUnmounted = useIsUnmounted();
    var setSafeState = useCallback(function (v) {
        if (!isUnmounted()) {
            setState(v);
        }
    }, [isUnmounted]);
    return [state, setSafeState];
}
//# sourceMappingURL=index.js.map