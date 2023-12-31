import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "./types";


export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const activeSectionContext = useActiveSectionContext();

  useEffect(() => {
    if (inView && activeSectionContext && Date.now() - activeSectionContext.timeOfLastClick > 1000) {
      if (activeSectionContext.setActiveSection) {
        activeSectionContext.setActiveSection(sectionName);
      }
    }
  }, [inView, activeSectionContext?.setActiveSection, activeSectionContext?.timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
