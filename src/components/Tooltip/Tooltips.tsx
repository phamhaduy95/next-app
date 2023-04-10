import React, {
  MouseEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { Placement } from "@popperjs/core";
import { Popup, PopupProps } from "../Popup";

export type TooltipsProps = {
  children: React.ReactElement;
  triggerRef: MutableRefObject<HTMLElement | null>;
  className?: string;
  placement?: PopupProps["placement"];
  padding?: number;
  enterDelay?: number;
  leaveDelay?: number;
  enabledOnFocus?: boolean;
};

type OmittedKeys = "children" | "triggerRef";

const defaultPropsValue: Required<Omit<TooltipsProps, OmittedKeys>> = {
  className: "",
  placement: "bottom",
  padding: 5,
  enterDelay: 100,
  leaveDelay: 100,
  enabledOnFocus: true,
};

export function Tooltips(props: TooltipsProps) {
  const newProps = { ...defaultPropsValue, ...props };
  const {
    children,
    placement,
    className,
    triggerRef,
    padding,
    enterDelay,
    leaveDelay,
    enabledOnFocus,
  } = newProps;
  const [openSignal, setOpenSignal] = useState(false);
  const [isShowed, setShowed] = useState(false);

  useEffect(() => {
    if (isShowed) return;
    if (!openSignal) return;
    const timeout = setTimeout(() => {
      setShowed(true);
      clearTimeout(timeout);
    }, enterDelay);
    return () => {
      clearTimeout(timeout);
    };
  }, [isShowed, enterDelay, openSignal]);

  useEffect(() => {
    if (!isShowed) return;
    if (openSignal) return;
    const timeout = setTimeout(() => {
      setShowed(false);
      clearTimeout(timeout);
    }, leaveDelay);
    return () => {
      clearTimeout(timeout);
    };
  }, [isShowed, openSignal, leaveDelay]);

  useEffect(() => {
    const triggerEl = triggerRef.current;
    if (triggerEl === null) return;
    const handleMouseEnter = () => {
      setOpenSignal(true);
    };
    const handleMouseLeave = () => {
      setOpenSignal(false);
    };
    triggerEl.addEventListener("mouseenter", handleMouseEnter);
    triggerEl.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      triggerEl.removeEventListener("mouseenter", handleMouseEnter);
      triggerEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);


  return (
    <Popup
      isShowed={true}
      placement={placement}
      padding={padding}
      triggerRef={triggerRef}
      arrowEnable
      className="Tooltips__Popup"
    >
      {children}
    </Popup>
  );
}
