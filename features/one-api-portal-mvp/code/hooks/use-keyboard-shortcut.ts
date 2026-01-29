'use client';

import { useEffect, useCallback } from 'react';

interface KeyboardShortcutOptions {
  ctrl?: boolean;
  meta?: boolean;
  shift?: boolean;
  alt?: boolean;
}

/**
 * Hook to handle global keyboard shortcuts
 * @param key - The key to listen for (e.g., 'k', 'Escape')
 * @param callback - Function to call when shortcut is triggered
 * @param options - Modifier key options (ctrl, meta, shift, alt)
 */
export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  options: KeyboardShortcutOptions = {}
) {
  const { ctrl = false, meta = false, shift = false, alt = false } = options;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const matchesKey = event.key.toLowerCase() === key.toLowerCase();

      // Check if any modifier is required
      const requiresModifier = ctrl || meta;

      // For Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      const matchesModifier = requiresModifier
        ? (ctrl && event.ctrlKey) || (meta && event.metaKey)
        : true;

      const matchesShift = shift ? event.shiftKey : !event.shiftKey;
      const matchesAlt = alt ? event.altKey : !event.altKey;

      if (matchesKey && matchesModifier && matchesShift && matchesAlt) {
        event.preventDefault();
        callback();
      }
    },
    [key, callback, ctrl, meta, shift, alt]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}
