import React from "react";
import { addons, types } from "@storybook/addons";
import Usage from "./usage";

addons.register("@scaleds/usage-addon", () => {
  addons.add(`@scaleds/usage-addon`, {
    type: types.TAB,
    title: "Usage",
    route: ({ storyId, refId, path }) => {
      const hideUsageButtonStyles = document.getElementById(
        "hide-usage-button"
      );
      if (path.includes("components-") && hideUsageButtonStyles) {
        hideUsageButtonStyles.remove();
      }

      if (!path.includes("components-") && !hideUsageButtonStyles) {
        const style = document.createElement("link");
        style.id = "hide-usage-button";
        style.rel = "stylesheet";
        style.href = "hide-usage-button.css";

        document.body.appendChild(style);
      }

      return refId ? `/usage/${refId}_${storyId}` : `/usage/${storyId}`;
    },
    match: ({ viewMode }) => viewMode === "usage",
    render: props => <Usage {...props} />
  });
});
