import { createPopper, Placement } from '@popperjs/core';
import { MutableRefObject, useLayoutEffect } from 'react';

export default function usePopupPlacementHandler(
    popupRef: MutableRefObject<HTMLElement | null>,
    triggerRef: MutableRefObject<HTMLElement | null>,
    options: {
        placement: Placement;
        strategy: 'absolute' | 'fixed';
    },
    isPortalMounted: boolean
) {
    const { placement, strategy } = options;

    useLayoutEffect(() => {
        if (!isPortalMounted) return;
        const triggerEl = triggerRef.current;
        const popupEl = popupRef.current;
        if (triggerEl === null || popupEl === null) return;
        const handler = createPopper(triggerEl, popupEl, {
            strategy,
            placement,
        });
        return () => {
            handler.destroy();
        };
    }, [placement, strategy, isPortalMounted, triggerRef, popupRef]);
}
