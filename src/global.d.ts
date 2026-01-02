// Global type declarations

// Plausible Analytics
interface PlausibleFunction {
  (...args: unknown[]): void;
  q?: unknown[];
  init?: (options?: Record<string, unknown>) => void;
  o?: Record<string, unknown>;
}

declare global {
  interface Window {
    plausible: PlausibleFunction;
  }
  var plausible: PlausibleFunction;
}

export {};
