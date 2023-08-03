import { MutableRefObject, useEffect } from 'react';

export default function usePopperPaddingHandler(contentRef: MutableRefObject<HTMLElement | null>, padding: number) {
    useEffect(() => {
        const contentEl = contentRef.current;
        if (contentEl === null) return;
        const paddingInPixel = `${padding}px`;
        contentEl.style.setProperty('margin-top', paddingInPixel);
    }, [contentRef, padding]);
}
