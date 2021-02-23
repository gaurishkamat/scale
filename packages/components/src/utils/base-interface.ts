import { CssClassMap } from './utils';
import { StyleSheet } from 'jss';

export default interface Base {
  styles?: StyleSheet | string;
  stylesheet?: StyleSheet;
  disconnectedCallback(): void;
  componentWillUpdate(): void;
  getCssClassMap(): CssClassMap;
}
