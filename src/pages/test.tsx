import { Popup } from "@/components/Popup";
import { ToolTips } from "@/components/Tooltip";


import { createPopper } from "@popperjs/core";
import { useEffect, useRef } from "react";

export default function TestPage() {
  const ref1 = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div className="TestPage__Container">
        <button className="TestPage__Button" ref={ref1}>
          Option 1
        </button>
        <ToolTips triggerRef={ref1}>
          <>option 1</>
        </ToolTips>
      </div>

    </>
  );
}
