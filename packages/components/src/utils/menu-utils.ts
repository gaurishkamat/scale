import { MenuItem } from '../components/app-interfaces';

export const findSelected = (
  structure: MenuItem[] = [],
  id: string,
  parent?: MenuItem
) =>
  structure.reduce(
    (acc, item) => {
      if (item.id === id) {
        return { selected: item, parent };
      }

      if (
        item.children &&
        item.children.length &&
        !!findSelected(item.children, id, item).selected
      ) {
        return findSelected(item.children, id, item);
      }

      return acc;
    },
    { selected: null, parent: null }
  );

export const findRootNode = (structure: MenuItem[], id: string) => {
  let result = findSelected(structure, id);
  while (result.parent) {
    result = findSelected(structure, result.parent.id);
  }
  return result.selected;
};
