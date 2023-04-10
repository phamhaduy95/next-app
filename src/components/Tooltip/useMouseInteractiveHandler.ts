import { MutableRefObject } from "react";

export default function useMouseInteractiveHandler(
  triggerRef: MutableRefObject<HTMLElement>,
  handlers: {
    onMouseEnter: () => void;
    onMouseMove: () => void;
    onMouseLeave: () => void;
  }
) {}
