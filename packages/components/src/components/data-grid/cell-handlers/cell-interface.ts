export interface Cell {
  defaults?: {
    maxWidth?: number;
    minWidth?: number;
    mobileTitle?: boolean;
    resizable?: boolean;
    sortable?: boolean;
    sortBy?: 'number' | 'text';
    stretchWeight?: number;
    textAlign?: 'left' | 'center' | 'right';
    visible?: boolean;
    width?: number;
  };
  getLongestContent?({ rows, columnIndex, field }): any;
  render({
    field,
    content,
    component,
    rowIndex,
    columnIndex,
    isAutoWidthCheck,
  }): HTMLElement;
}
