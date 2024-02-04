import React, { useState, useRef, useEffect, CSSProperties } from "react";
import { Transition } from "react-transition-group";

interface AccordionProps {
  title: string;
  children: any;
}

interface AccordionState {
  isOpen: boolean;
  height: number | null;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [accordionState, setAccordionState] = useState<AccordionState>({
    isOpen: false,
    height: null,
  });
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setAccordionState((prevState) => ({
        ...prevState,
        height: prevState.isOpen ? contentRef.current!.scrollHeight : 0,
      }));
    }
  }, [accordionState.isOpen]);

  const toggleAccordion = () => {
    setAccordionState((prevState) => ({
      isOpen: !prevState.isOpen,
      height:
        prevState.isOpen && contentRef.current
          ? contentRef.current.scrollHeight
          : 0,
    }));
  };

  const containerStyle: CSSProperties = {
    height: accordionState.height !== null ? `${accordionState.height}px` : "auto",
  };
  

  return (
    <div className="border border-violet-600 rounded-xl mb-2 mt-6">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="text-white">
          {accordionState.isOpen ? "▲" : "▼"}
        </span>
      </div>

      <Transition in={accordionState.isOpen} timeout={300}>
        {(state) => (
          <div
            style={{ height: accordionState.height }}
            className={`transition-height duration-300 ease-in-out overflow-hidden ${
              state === "entering" || state === "exiting" ? "h-0" : "h-auto"
            }`}
          >
            <div ref={contentRef} className="p-4 text-white">
              {children}
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Accordion;
