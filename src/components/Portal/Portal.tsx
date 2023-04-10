import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePortalStore } from "./store";

export type PortalProps = {
  children: React.ReactElement;
};

const Portal = (props: PortalProps) => {
  const { children } = props;
  const ref = useRef<HTMLElement | null>(null);
  const isMounted = usePortalStore((state) => state.isMounted);
  const setMounted = usePortalStore((state) => state.action.setMounted);
  useEffect(() => {
    const portalEl = document.getElementById("portal");
    setMounted(true);
    ref.current = portalEl;
  }, []);
  return (isMounted && ref.current)? createPortal(<>{children}</>, ref.current as HTMLElement) : <></>;
};

export default Portal;
