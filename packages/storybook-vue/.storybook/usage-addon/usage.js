import React from "react";
import { DocsWrapper, DocsContent } from "@storybook/components";
import { Description } from "@storybook/addon-docs/blocks";
import { useStorybookState } from "@storybook/api";
import accordion from "raw-loader!../../stories/3_components/accordion/accordion.md";
import brandHeader from "raw-loader!../../stories/3_components/brand-header/brand-header.md";
import breadcrumb from "raw-loader!../../stories/3_components/breadcrumb/breadcrumb.md";
import button from "raw-loader!../../stories/3_components/button/button.md";
import card from "raw-loader!../../stories/3_components/card/card.md";
import checkbox from "raw-loader!../../stories/3_components/checkbox/checkbox.md";
import collapsible from "raw-loader!../../stories/3_components/collapsible/collapsible.md";
import divider from "raw-loader!../../stories/3_components/divider/divider.md";
import icon from "raw-loader!../../stories/3_components/icon/icon.md";
import linkMarkdown from "raw-loader!../../stories/3_components/link/link.md";
import list from "raw-loader!../../stories/3_components/list/list.md";
import modal from "raw-loader!../../stories/3_components/modal/modal.md";
import progressBar from "raw-loader!../../stories/3_components/progress-bar/progress-bar.md";
import radioButton from "raw-loader!../../stories/3_components/radio-button/radio-button.md";
import select from "raw-loader!../../stories/3_components/select/select.md";
import sidebarNav from "raw-loader!../../stories/3_components/sidebar-nav/sidebar-nav.md";
import sidebarNavCollapsible from "raw-loader!../../stories/3_components/sidebar-nav-collapsible/sidebar-nav-collapsible.md";
import sidebarNavItem from "raw-loader!../../stories/3_components/sidebar-nav-item/sidebar-nav-item.md";
import slider from "raw-loader!../../stories/3_components/slider/slider.md";
import switchMarkdown from "raw-loader!../../stories/3_components/switch/switch.md";
import tabNavigation from "raw-loader!../../stories/3_components/tab-navigation/tab-navigation.md";
import table from "raw-loader!../../stories/3_components/table/table.md";
import tag from "raw-loader!../../stories/3_components/tag/tag.md";
import textarea from "raw-loader!../../stories/3_components/textarea/textarea.md";
import textInput from "raw-loader!../../stories/3_components/text-input/text-input.md";

const NOT_A_COMPONENT_MD = "`Browse to any component to see usage.`";
const COMPONENT_NOT_MAPPED_MD =
  "`Please import and add this component's usage markdown to the componentMap in .storybook/usage-addon/usage.js.`";
const Usage = props => {
  // First we determine the currently active story's kebab-cased name.
  const { storyId = "" } = useStorybookState();

  // Check if this is a component's story and grab it's name when available.
  const componentName = storyId.startsWith("components-")
    ? storyId.split("components-")[1].split("--")[0]
    : null;

  // 🎯 This is where you want to add your imported component usage markdown.
  // Pay attention to pick the key names according to the story url. eg:
  // ?path=/story/components-tab-navigation--text-only > tab-navigation
  // or:
  // ?path=/story/components-brandheader--standard > brandheader
  const componentMap = {
    accordion,
    brandheader: brandHeader,
    breadcrumb,
    button,
    card,
    checkbox,
    collapsible,
    divider,
    "icon-library": icon,
    icon,
    link: linkMarkdown,
    list,
    modal,
    "progress-bar": progressBar,
    radiobutton: radioButton,
    select,
    "sidebar-nav": sidebarNav,
    "sidebar-nav-collapsible": sidebarNavCollapsible,
    "sidebar-nav-item": sidebarNavItem,
    slider,
    switch: switchMarkdown,
    "tab-navigation": tabNavigation,
    table,
    tag,
    textarea,
    textinput: textInput
  };

  // Select the most appropriate markdown text based on if this is a component story and
  // if the component is present in the componentMap from above.
  const markdown = componentName
    ? componentMap[componentName] || COMPONENT_NOT_MAPPED_MD
    : NOT_A_COMPONENT_MD;

  return (
    props.active && (
      <div className="sbdocs-frame">
        <DocsWrapper
          className="sbdocs sbdocs-wrapper addon-usage"
          style={{ minHeight: "100%" }}
        >
          <DocsContent className="sbdocs sbdocs-content">
            <Description markdown={markdown} />
          </DocsContent>
        </DocsWrapper>
      </div>
    )
  );
};

export default Usage;
