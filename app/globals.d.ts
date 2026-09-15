/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="next" />
/// <reference types="tailwindcss" />

declare global {
  namespace JSX {
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