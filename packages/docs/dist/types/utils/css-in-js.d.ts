import { ComponentInterface } from '../stencil-public-runtime';
declare type CssInJsDecorator = (target: ComponentInterface, propertyKey: string) => void;
export declare function CssInJs(componentKey: string, styles: any): CssInJsDecorator;
export {};
