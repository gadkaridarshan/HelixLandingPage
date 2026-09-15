declare module 'react/jsx-runtime' {
  import { ReactElement, ReactNode } from 'react';

  export type JSXNamespace = {};

  export interface JSXElementAttributesProperty {
    children: ReactNode;
  }

  export interface JSXElementChildrenAttribute {
    children: ReactNode;
  }

  export interface IntrinsicAttributes {
    key?: React.Key | null;
  }

  export type ElementType = string | React.JSXElementConstructor<any>;

  export interface IntrinsicClassAttributes<P> {
    key?: React.Key | null;
  }

  export function jsx(
    type: ElementType,
    props: { children?: ReactNode } & { [key: string]: any },
    key?: React.Key | null
  ): ReactElement;

  export function jsxs(
    type: ElementType,
    props: { children?: ReactNode } & { [key: string]: any },
    key?: React.Key | null
  ): ReactElement;

  export function Fragment(
    props: { children?: ReactNode } & { [key: string]: any }
  ): ReactElement | null;
}