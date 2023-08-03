import { MutableRefObject, useEffect } from 'react';
import { PopupProps } from './Popup';

export default function useArrowPositionHandler(
    contentRef: MutableRefObject<HTMLElement | null>,
    arrowRef: MutableRefObject<HTMLElement | null>,
    placement: PopupProps['placement']
) {
    useEffect(() => {
        const contentEl = contentRef.current;
        const arrowEl = arrowRef.current;
        if (contentEl === null || arrowEl === null) return;
    }, [arrowRef, contentRef, placement]);
}
