import type { ReactNode } from "react";

declare global {
  namespace JSX {
    type Element = ReactNode;
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        [elemName: string]: any;
      }
    }
  }
}

export {};