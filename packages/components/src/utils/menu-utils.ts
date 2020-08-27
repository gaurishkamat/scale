import { MenuItem } from '../components/app-interfaces';

export const findSelected = (
  structure: MenuItem[],
  href: string,
  parent?: MenuItem
) =>
  structure.reduce(
    (acc, item) => {
      if (item.href === href) {
        return { selected: item, parent };
      }

      if (
        item.children &&
        item.children.length &&
        !!findSelected(item.children, href, item).selected
      ) {
        return findSelected(item.children, href, item);
      }

      return acc;
    },
    { selected: null, parent: null }
  );

export const findRootNode = (structure: MenuItem[], href: string) => {
  let result = findSelected(structure, href);
  while (result.parent) {
    result = findSelected(structure, result.parent.href);
  }
  return result.selected;
};
