import { Component } from "@angular/core";

import { mainNavigation } from "./data/mainNavigation";
import { iconNavigation } from "./data/iconNavigation";
import { sectorNavigation } from "./data/sectorNavigation";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"],
})
export class TopBarComponent {
  mainNavigation = mainNavigation;
  iconNavigation = iconNavigation;
  sectorNavigation = sectorNavigation;
  activeRouteId = "Third Level 24";
  activeSectorId = "Personal38";
  size = "small"
}
