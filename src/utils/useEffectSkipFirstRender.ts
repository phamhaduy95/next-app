import { useEffect, useRef } from 'react';

export const useEffectSkipFirstRender = (effectCallback: React.EffectCallback, dep: any[]) => {
    const countRef = useRef(0);

    useEffect(() => {
        const count = countRef.current;
        if (count === 0) countRef.current += 1;
        else {
            const cleanUp = effectCallback();
            if (cleanUp) {
                return () => {
                    cleanUp();
                };
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...dep]);
};
