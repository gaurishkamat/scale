import { h } from '@stencil/core';

interface TagDescriptorInterface {
  tag: string;
  attributes: object;
}

type HTMLStringFunction = () => string;

/**
 * Conditionally render markup for an icon based on data.
 *
 * @param value when a string, will be used as the `name` attribute in a `<app-icon>`,
 *              when a function it should return a string of HTML
 * @param customContainerClass a custom class for the wrapper of the HTML returned by `value`
 */
export const renderIcon = (
  value: string | HTMLStringFunction | TagDescriptorInterface,
  customContainerClass?: string
): HTMLElement => {
  if (typeof value === 'function') {
    return <span innerHTML={value()} class={customContainerClass} />;
  }
  if (typeof value === 'string') {
    return <app-icon name={value} />;
  }
  const Tag = value.tag;
  return <Tag {...value.attributes} />;
};
