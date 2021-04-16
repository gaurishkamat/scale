import React from "react";
import { addons, types } from "@storybook/addons";
import { useGlobals } from "@storybook/api";
import sidebarLinks from "../../sidebar-links.json";

const sidebarClassName = "css-ohbggj";

const createLink = ({ title, href }) => {
  const link = document.createElement("a");
  link.href = href;
  link.id = `sidebar-link-${title}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("class", "sidebar-item css-b6bmib");
  link.innerHTML = title;
  return link;
};

let sidebarLinksContainer;

addons.register("@scaleds/sidebar-links-addon", () => {
  addons.add(`@scaleds/sidebar-links-addon`, {
    type: types.TAB,
    route: () => {
      const [{ locale }] = useGlobals();
      const sidebarContainer = document.querySelector(
        "#storybook-explorer-tree > div > div"
      );

      React.useEffect(() => {
        if (!locale) {
          return;
        }

        if (sidebarLinksContainer) {
          sidebarLinksContainer.remove();
        }
        sidebarLinksContainer = document.createElement("div");
        sidebarLinksContainer.setAttribute("style", "margin-top: 48px;");
        sidebarLinksContainer.id = "sidebar-links";
        sidebarContainer.appendChild(sidebarLinksContainer);

        sidebarLinks[locale].forEach((link) => {
          sidebarLinksContainer.appendChild(createLink(link));
        });
      }, [locale]);

      return null;
    },
    render: () => null,
    match: () => null,
  });
});