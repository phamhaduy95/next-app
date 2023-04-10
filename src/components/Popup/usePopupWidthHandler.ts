import { MutableRefObject, useLayoutEffect } from "react";
import { PopupProps } from "./Popup";

export default function usePopupWidthHandler(
  popupRef: MutableRefObject<HTMLElement | null>,
  triggerRef: MutableRefObject<HTMLElement | null>,
  width: NonNullable<PopupProps["width"]> = "auto",
  isPortalMounted: boolean
) {
  useLayoutEffect(() => {
    if (!isPortalMounted) return;
    const triggerEl = triggerRef.current;
    const popupEl = popupRef.current;
    if (triggerEl === null || popupEl === null) return;
    if (width === "auto") return;
    const newWidthForPopup =
      width === "same-as-trigger"
        ? `${triggerEl.clientHeight}px`
        : `${width}px`;
    popupEl.style.setProperty("min-width", "unset");
    popupEl.style.setProperty("max-width", "unset");
    popupEl.style.setProperty("width", newWidthForPopup);
    return () => {
      popupEl.style.removeProperty("min-width");
      popupEl.style.removeProperty("max-width");
      popupEl.style.removeProperty("width");
    };
  }, [width, isPortalMounted]);
}
