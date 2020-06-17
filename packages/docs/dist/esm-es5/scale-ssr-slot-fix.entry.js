import { r as registerInstance, h, H as Host } from './index-c2e5d8cb.js';
var SsrSlotFix = /** @class */ (function () {
    function SsrSlotFix(hostRef) {
        registerInstance(this, hostRef);
    }
    SsrSlotFix.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return SsrSlotFix;
}());
export { SsrSlotFix as scale_ssr_slot_fix };
