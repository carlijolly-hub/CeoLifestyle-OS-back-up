import { useEffect } from "react";

/**
 * Custom hook to lock body scrolling when a modal or dialog popup is open.
 * Restores original scroll position and overflow on close/unmount.
 */
export function useBodyScrollLock(isOpen: boolean = true) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);
}
