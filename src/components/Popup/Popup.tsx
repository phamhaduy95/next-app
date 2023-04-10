import { BasePlacement, VariationPlacement } from "@popperjs/core";
import React, { MutableRefObject, useRef } from "react";

import classNames from "classnames";
import usePopupWidthHandler from "./usePopupWidthHandler";
import Portal from "../Portal/Portal";
import usePopupPlacementHandler from "./usePopupPlacementHandler";
import { ClickOutSideWatcher } from "../ClickOutsideWatcher";
import { usePortalStore } from "../Portal/store";
import usePopperPaddingHandler from "./usePopperPaddingHandler";

export type PopupProps = {
  className?: string;
  children: JSX.Element[] | JSX.Element | string;
  padding?: number;
  placement?: BasePlacement | VariationPlacement;
  arrowEnable?: boolean;
  isShowed: boolean;
  triggerRef: MutableRefObject<any>;
  width?: "auto" | "same-as-trigger" | number;
  onClickOutside?: (e: MouseEvent) => void;
  role?: React.AriaRole;
};

type OmittedKeys = "isShowed" | "triggerRef" | "children";

const defaultProps: Required<Omit<PopupProps, OmittedKeys>> = Object.freeze({
  className: "",
  padding: 5,
  placement: "bottom",
  arrowEnable: true,
  width: "auto",
  onClickOutside: () => {},
  role: "",
});

export function Popup(props: PopupProps) {
  const newProps = { ...defaultProps, ...props };
  const {
    isShowed,
    className,
    children,
    padding,
    placement,
    arrowEnable,
    triggerRef,
    width,
    onClickOutside,
  } = newProps;

  const popupRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isPortalMounted = usePortalStore((state) => state.isMounted);

  usePopupWidthHandler(popupRef, triggerRef, width, isPortalMounted);
  usePopupPlacementHandler(
    popupRef,
    triggerRef,
    {
      placement,
      strategy: "absolute",
    },
    isPortalMounted
  );
  usePopperPaddingHandler(contentRef,padding);

  const rootClassName = classNames("Popup", {
    showed: isShowed,
  });

  const contentClassName = classNames("Popup__Content", {
    [`${className}`]: className,
    showed: isShowed,
  });

  function renderArrowElement() {
    return arrowEnable ? (
      <div className={"Popup_Arrow"} ref={arrowRef} />
    ) : (
      <></>
    );
  }

  return (
    <ClickOutSideWatcher anchorRef={popupRef} onClickOutSide={onClickOutside}>
      <Portal>
        <div className={rootClassName} ref={popupRef} role={""}>
          <div className={contentClassName}>
            {renderArrowElement()}
            {children}
          </div>
        </div>
      </Portal>
    </ClickOutSideWatcher>
  );
}

export default Popup;
