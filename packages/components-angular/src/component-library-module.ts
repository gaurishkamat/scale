import { NgModule } from '@angular/core';
import { defineCustomElements } from '@scaleds/components-telekom/loader';

import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { NumericValueAccessor } from './directives/number-value-accessor';
import { RadioValueAccessor } from './directives/radio-value-accessor';
import { SelectValueAccessor } from './directives/select-value-accessor';
import {
  AppLogo,
  AppMegaMenu,
  AppNavigationMainMobile,
  AppNavigationSectorMobile,
  ScaleAccordion,
  ScaleAlert,
  ScaleAppHeader,
  ScaleAppShell,
  ScaleBreadcrumb,
  ScaleButton,
  ScaleCard,
  ScaleCarousel,
  ScaleCollapsible,
  ScaleDivider,
  ScaleIcon,
  ScaleInput,
  ScaleLink,
  ScaleList,
  ScaleListItem,
  ScaleModal,
  ScaleProgressBar,
  ScaleSidebarNav,
  ScaleSidebarNavCollapsible,
  ScaleSidebarNavItem,
  ScaleSlider,
  ScaleSsrSlotFix,
  ScaleSwitch,
  ScaleTabHeader,
  ScaleTabNav,
  ScaleTabPanel,
  ScaleTable,
  ScaleTag,
  ScaleText,
  ScaleToast
} from './directives/proxies';
import { TextValueAccessor } from './directives/text-value-accessor';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  AppLogo,
  AppMegaMenu,
  AppNavigationMainMobile,
  AppNavigationSectorMobile,
  ScaleAccordion,
  ScaleAlert,
  ScaleAppHeader,
  ScaleAppShell,
  ScaleBreadcrumb,
  ScaleButton,
  ScaleCard,
  ScaleCarousel,
  ScaleCollapsible,
  ScaleDivider,
  ScaleIcon,
  ScaleInput,
  ScaleLink,
  ScaleList,
  ScaleListItem,
  ScaleModal,
  ScaleProgressBar,
  ScaleSidebarNav,
  ScaleSidebarNavCollapsible,
  ScaleSidebarNavItem,
  ScaleSlider,
  ScaleSsrSlotFix,
  ScaleSwitch,
  ScaleTabHeader,
  ScaleTabNav,
  ScaleTabPanel,
  ScaleTable,
  ScaleTag,
  ScaleText,
  ScaleToast,

  // Value Accessors
  BooleanValueAccessor,
  NumericValueAccessor,
  RadioValueAccessor,
  SelectValueAccessor,
  TextValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class ComponentLibraryModule {}
