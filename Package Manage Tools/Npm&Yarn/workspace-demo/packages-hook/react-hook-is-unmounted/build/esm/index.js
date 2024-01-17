import { useRef, useCallback, useEffect } from 'react';
export default function useIsUnmounted() {
    var ref = useRef(false);
    var isUnmounted = useCallback(function () { return ref.current; }, []);
    useEffect(function () {
        return function () {
            ref.current = true;
        };
    }, []);
    return isUnmounted;
}
//# sourceMappingURL=index.js.map