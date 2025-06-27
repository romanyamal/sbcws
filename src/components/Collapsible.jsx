import React, { useRef, useState } from "react";

export const Collapsible = ({ title, children, colorBg, classez }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className={`overflow-hidden ${classez}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left  px-4 py-3 text-black border-b-1 ${colorBg}`}
      >
        <span className="flex items-center gap-2">
          <svg
            className={`w-4 h-4 transition-transform duration-300 transform ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          {title}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className="transition-all duration-300 ease-in-out overflow-hidden bg-[#faebd5] rounded-b-sm px-4 text-black"
      >
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
};
