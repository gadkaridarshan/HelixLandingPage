/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="next" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {};