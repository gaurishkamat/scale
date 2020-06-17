import { ComponentInterface } from '@stencil/core';
declare type CssInJsDecorator = (target: ComponentInterface, propertyKey: string) => void;
export declare function CssInJs(componentKey: string, styles: any): CssInJsDecorator;
export {};
